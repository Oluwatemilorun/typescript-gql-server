import { Document } from 'mongoose';

export interface Category {
	name: string;
	description: string;
	icon: string;
}

export interface ICategory extends Category, Document {}
