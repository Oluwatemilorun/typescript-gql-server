import { FacilityTC } from '@models/Facility.model';
import { AttachUserToArg, CheckAuth } from '@middlewares/resolver.middleware';

export const FacilityMutation = {
	createFacility: FacilityTC.getResolver('createOne', [CheckAuth, AttachUserToArg]),
	updateFacility: FacilityTC.getResolver('updateById', [CheckAuth]),
};
