import { AuthenticationError } from 'apollo-server-express';

import { UserTC } from '@models/User.model';
import { CheckAdmin, CheckAuth } from '@middlewares/resolver.middleware';

export const UserMutation = {
	updateUser: UserTC.getResolver('updateById', [CheckAuth, CheckAdmin]),

	updateProfile: UserTC.getResolver('updateById', [CheckAuth])
		.wrap(
			(resolver) => {
				resolver.cloneArg('record', 'userProfile');
				resolver
					.getArgITC('record')
					.removeField(['role', 'is_active', 'is_deleted', '_id'])
					.makeOptional(['email']);
				return resolver;
			},
			{
				displayName: 'UpdateUserProfile',
				description: 'Update the authenticated user profile',
				args: { record: UserTC.getInputType() },
			}
		)
		.wrapResolve((next) => ({ context, args, ...rp }) => {
			if (!(context as any).auth)
				throw new AuthenticationError('Authentication failed');

			args.record._id = (context as any).user._id;
			return next({ args, context, ...rp });
		}),
};
