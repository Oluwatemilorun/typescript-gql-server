import { CategoryTC } from '@models/Category.model';
import { ProtectFieldsWrapper } from '@middlewares/resolver-wrapper.middleware';

const ProtectFields = [
	'user',
	'email',
	'phone',
	'is_active',
	'is_deleted',
	'notifications',
	'reservations',
	'category',
];

export const CategoryQuery = {
	category: ProtectFieldsWrapper(CategoryTC.getResolver('findOne'), ProtectFields),
	categories: ProtectFieldsWrapper(CategoryTC.getResolver('pagination'), ProtectFields),
};
