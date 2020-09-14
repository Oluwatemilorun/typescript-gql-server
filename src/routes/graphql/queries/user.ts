import { AuthenticationError } from 'apollo-server-express';

import { UserTC } from '@models/User.model';
import { CheckAdmin, CheckAuth } from '@middlewares/resolver.middleware';

export const UserQuery = {
	user: UserTC.getResolver('findOne', [CheckAuth, CheckAdmin]),
	users: UserTC.getResolver('pagination', [CheckAuth, CheckAdmin]),

	profile: UserTC.getResolver('findById', [CheckAuth])
		.wrap((resolver) => resolver, {
			displayName: 'UserProfile',
			description: 'Get the authenticated user profile',
			args: {},
		})
		.wrapResolve((next) => ({ context, args, ...rp }) => {
			if (!(context as any).auth)
				throw new AuthenticationError('Authentication failed');

			args._id = (context as any).user._id;
			return next({ args, context, ...rp });
		}),
};
