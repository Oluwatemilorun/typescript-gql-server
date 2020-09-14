import { FacilityTC } from '@models/Facility.model';
import { ProtectFieldsWrapper } from '@middlewares/resolver-wrapper.middleware';

const ProtectFields = [
	'user',
	'email',
	'phone',
	'is_active',
	'is_deleted',
	'notifications',
	'reservations',
];

// TODO: create middleware to inject `{ is_active: true }` into the filter arg

export const FacilityQuery = {
	facility: ProtectFieldsWrapper(FacilityTC.getResolver('findOne'), ProtectFields),
	facilities: ProtectFieldsWrapper(FacilityTC.getResolver('pagination'), ProtectFields),
};
