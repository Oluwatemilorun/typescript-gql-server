import Category from '@models/Category.model';

export const validateCategory = async (_id: string) => {
	const c = await Category.findOne({ _id });
	if (c) return Promise.resolve(true);
	else return Promise.reject(false);
};

// export const validateUser = (_)
