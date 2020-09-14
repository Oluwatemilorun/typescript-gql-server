import { Schema, Types } from 'mongoose';

import { validateCategory } from './validators';

export const ProtectedFields = [];
export const ImmutableFields = [
	'createdAt',
	'updatedAt',
	'user',
	// 'location',
	'reservations',
];

export const OpeningHoursSchema = new Schema(
	{
		day: {
			type: String,
			enum: [
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday',
				'Sunday',
			],
			required: true,
		},
		from: { type: String, minlength: 5, maxlength: 5, required: true },
		to: { type: String, minlength: 5, maxlength: 5, required: true },
	},
	{ _id: false }
);

export const FacilitySchema: Schema = new Schema(
	{
		name: { type: String, required: true, maxlength: 50 },
		short_description: { type: String, required: true, maxlength: 150 },

		category: {
			type: Types.ObjectId,
			ref: 'Category',
			required: true,
			validate: {
				validator: validateCategory,
				message: 'Invalid category / category not supported.',
			},
		},

		user: { type: Types.ObjectId, ref: 'User', required: true },

		email: { type: String },
		phone: { type: String },
		capacity: { type: Number, default: 10, min: 0 },
		opening_hours: [OpeningHoursSchema],

		reservations: [{ type: Types.ObjectId, ref: 'Reservation' }],

		is_active: { type: Boolean, default: true },
	},
	{
		timestamps: true,
	}
);
