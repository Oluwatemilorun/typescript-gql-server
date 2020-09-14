import './hydrate';

import { SchemaComposer } from 'graphql-compose';

import { UserQuery, CategoryQuery, FacilityQuery, ReservationQueries } from './queries';

import {
	UserMutation,
	CategoryMutation,
	FacilityMutation,
	ReservationMutation,
} from './mutations';

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
	...UserQuery,
	...CategoryQuery,
	...FacilityQuery,
	...ReservationQueries,
});

schemaComposer.Mutation.addFields({
	...UserMutation,
	...CategoryMutation,
	...FacilityMutation,
	...ReservationMutation,
});

export const schema = schemaComposer.buildSchema();
