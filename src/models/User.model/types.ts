import { Document } from 'mongoose';

export interface User {
	firstname?: string;
	middlename?: string;
	lastname?: string;
	email: string;
	phone?: string;
	avatar?: string;
	is_active?: boolean;
	email_verified?: boolean;
	phone_verified?: boolean;
	role: 'USER' | 'ADMIN';
	hash: string;
	token?: string;
	token_expire?: string;
}

export interface IUser extends User, Document {}
