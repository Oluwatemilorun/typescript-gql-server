import { Schema } from 'mongoose';

export const ProtectedFields = ['hash', 'token', 'token_expire'];
export const ImmutableFields = ['createdAt', 'updatedAt'];

export const CategorySchema = new Schema(
	{
		name: { type: String, required: true, unique: true, text: true },
		description: { type: String, maxlength: 150 },
		icon: { type: String },
	},
	{
		timestamps: true,
	}
);
