import { Model, model } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

import { IReservation } from './types';
import { ReservationSchema, ProtectedFields, ImmutableFields } from './schema';

const Reservation: Model<IReservation> = model('Reservation', ReservationSchema);

const ReservationTC = composeWithMongoose(Reservation, {
	fields: { remove: ProtectedFields },
	inputType: { fields: { remove: ImmutableFields } },
});

export * from './types';
export { ReservationTC, ImmutableFields };
export default Reservation;
