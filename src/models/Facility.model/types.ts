import { Document } from 'mongoose';
import { ICategory } from '@models/Category.model';
import { IReservation } from '@models/Reservation.model';
import { IUser } from '@models/User.model';

interface OpeningHour {
	day: string;
	from: string;
	to: string;
}

export interface Facility {
	name: string;
	short_description: string;
	user: IUser['_id'];
	category: ICategory['_id'];
	email: string;
	phone: string;
	capacity: string;
	opening_hours: OpeningHour[];
	reservations: IReservation['_id'][];
	is_active: boolean;
}

export interface IFacility extends Facility, Document {}
