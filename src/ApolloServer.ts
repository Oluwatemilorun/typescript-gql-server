import { ApolloServer } from 'apollo-server-express';

import { ApolloContext } from '@middlewares/apollo-context.middleware';

import { schema } from './routes/graphql';

const server = new ApolloServer({
	// cors: true,
	schema,
	playground: process.env.NODE_ENV === 'development' ? true : false,
	introspection: true,
	tracing: true,
	context: ApolloContext,
});

export default server;
