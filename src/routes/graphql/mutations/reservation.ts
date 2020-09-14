import { ReservationTC } from '@models/Reservation.model';
import { AttachUserToArg, CheckAuth } from '@middlewares/resolver.middleware';

export const ReservationMutation = {
	createReservation: ReservationTC.getResolver('createOne', [
		CheckAuth,
		AttachUserToArg,
	]),
	updateReservation: ReservationTC.getResolver('updateById', [CheckAuth]),
};
