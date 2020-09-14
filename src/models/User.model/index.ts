import { Model, model } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

import { UserSchema, ProtectedFields, ImmutableFields } from './schema';
import { IUser, User } from './types';

const User: Model<IUser> = model('User', UserSchema);

const UserTC = composeWithMongoose(User, {
	fields: { remove: ProtectedFields },
	inputType: { fields: { remove: ImmutableFields } },
});

export * from './types';
export { UserTC };
export default User;
