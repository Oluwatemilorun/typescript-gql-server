import { IUser } from '@models/User.model';
import { AuthenticationError, ForbiddenError } from 'apollo-server-express';
import { ResolverMiddleware } from 'graphql-compose';

export const CheckAuth: ResolverMiddleware<any, any> = async (
	next,
	s,
	a,
	c: { auth: true; user: IUser },
	i
) => {
	if (!c.auth) throw new AuthenticationError('Authentication failed');

	const res = await next(s, a, c, i);

	return res;
};

export const AttachUserToArg: ResolverMiddleware<any, any> = async (
	next,
	s,
	a,
	c: { auth: true; user: IUser },
	i
) => {
	a = {
		record: {
			...a.record,
			user: c.user._id,
		},
	};

	const res = await next(s, a, c, i);

	return res;
};

export const CheckAdmin: ResolverMiddleware<any, any> = async (
	next,
	s,
	a,
	c: { auth: true; user: IUser },
	i
) => {
	if (c.user.role !== 'ADMIN')
		throw new ForbiddenError("You don't have access to perform this operation.");

	const res = await next(s, a, c, i);

	return res;
};
