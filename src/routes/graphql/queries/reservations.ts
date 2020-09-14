import { CheckAdmin, CheckAuth } from '@middlewares/resolver.middleware';
import { ReservationTC } from '@models/Reservation.model';

export const ReservationQueries = {
	reservation: ReservationTC.getResolver('findById', [CheckAuth]),
	reservations: ReservationTC.getResolver('pagination', [CheckAuth, CheckAdmin]),
};
