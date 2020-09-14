import { Document } from 'mongoose';
import { IUser } from '@models/User.model';
import { IFacility } from '@models/Facility.model/types';

export interface Reservation {
	user: IUser['_id'];
	facility: IFacility['_id'];
	seats: number;
	date_reserved: string;
	time_reserved: string;
	is_active: boolean;
	is_cancelled: boolean;
	is_completed: boolean;
}

export interface IReservation extends Reservation, Document {}
