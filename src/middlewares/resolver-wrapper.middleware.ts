import { Resolver } from 'graphql-compose';

export const ProtectFieldsWrapper = (resolver: Resolver, fields: string[]) => {
	return resolver.wrap((nr) => {
		const resolverOTC = resolver.getOTC();

		nr.cloneArg('filter', `${resolverOTC.getTypeName()}PublicFilter`);
		nr.getArgITC('filter').removeField(fields);
		nr.getOTC().removeField(fields);

		return nr;
	});
};
