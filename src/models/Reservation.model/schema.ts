import { Schema, Types } from 'mongoose';

export const ProtectedFields = [];
export const ImmutableFields = ['createdAt', 'updatedAt', 'user'];

export const ReservationSchema = new Schema(
	{
		user: { type: Types.ObjectId, ref: 'User', required: true },
		facility: { type: Types.ObjectId, ref: 'Facility', required: true },

		seats: { type: Number, default: 1, min: 1 },
		notifications: [],
		date_reserved: { type: Date, required: true },
		time_reserved: { type: String },

		is_active: { type: Boolean, default: true },
		is_cancelled: { type: Boolean, default: false },
		is_completed: { type: Boolean, default: false },
	},
	{
		timestamps: true,
	}
);
