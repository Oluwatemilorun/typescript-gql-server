import { Model, model } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

import { CategorySchema, ImmutableFields, ProtectedFields } from './schema';
import { ICategory } from './types';

const Category: Model<ICategory> = model('Category', CategorySchema);

const CategoryTC = composeWithMongoose(Category, {
	fields: { remove: ProtectedFields },
	inputType: { fields: { remove: ImmutableFields } },
});

export * from './types';
export { CategoryTC };
export default Category;
