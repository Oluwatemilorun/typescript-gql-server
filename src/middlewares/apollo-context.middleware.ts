import { Request } from 'express';
import { verify } from 'jsonwebtoken';
import { JWT_SECRET } from '@config';
import { IUser } from '@models/User.model';

export const ApolloContext = async ({ req }: { req: Request }) => {
	let auth = true;
	let decoded: IUser | null = null;
	const token = req.headers.authorization;

	if (!token) auth = false;
	else {
		try {
			decoded = verify(token, JWT_SECRET) as IUser;
		} catch (error) {
			auth = false;
		}
	}

	return auth && decoded
		? {
				user: decoded,
				auth,
		  }
		: {
				auth,
		  };
};
