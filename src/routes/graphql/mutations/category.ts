import { CategoryTC } from '@models/Category.model';
import { CheckAdmin, CheckAuth } from '@middlewares/resolver.middleware';

export const CategoryMutation = {
	createCategory: CategoryTC.getResolver('createOne', [CheckAuth, CheckAdmin]),
	updateCategory: CategoryTC.getResolver('updateById', [CheckAuth, CheckAdmin]),
};
