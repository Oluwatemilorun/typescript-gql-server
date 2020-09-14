import { Model, model } from 'mongoose';
import { composeWithMongoose, convertSchemaToGraphQL } from 'graphql-compose-mongoose';
import { schemaComposer } from 'graphql-compose';

import { IFacility, Facility } from './types';
import {
	FacilitySchema,
	OpeningHoursSchema,
	ImmutableFields,
	ProtectedFields,
} from './schema';

const Facility: Model<IFacility> = model('Facility', FacilitySchema);

convertSchemaToGraphQL(OpeningHoursSchema, 'OpeningHours', schemaComposer);

const FacilityTC = composeWithMongoose(Facility, {
	fields: { remove: ProtectedFields },
	inputType: { fields: { remove: ImmutableFields } },
});

export * from './types';
export { FacilityTC };
export default Facility;
