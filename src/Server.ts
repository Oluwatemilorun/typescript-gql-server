import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import createError, { HttpError } from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
import { SERVICE_UNAVAILABLE, NOT_FOUND } from 'http-status-codes';
import 'express-async-errors';

import ApolloServer from '@apollo';
import BaseRouter from './routes';
import logger from '@shared/Logger';
import connectDB from './db';
import { COOKIE_SECRET } from '@config';

// Init express
const app = express();

// Connect to MongoDB
connectDB();

// Set basic express settings
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(COOKIE_SECRET));

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// Security
if (process.env.NODE_ENV === 'production') {
	app.use(helmet());
}

// Integrate apollo server
ApolloServer.applyMiddleware({ app });

// Add APIs
app.use('/', BaseRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	next(createError(NOT_FOUND));
});

// Print API errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	logger.error(err.message, err);

	res.status(err.status || SERVICE_UNAVAILABLE);
	return res.send({
		state: 'ERROR',
		message: err.message,
		payload: { ...err },
	});
});

/************************************************************************************
 *                              Serve front-end content
 ***********************************************************************************/

//  TODO: Add favicon.
// const viewsDir = path.join(__dirname, 'views');
// app.set('views', viewsDir);
// const staticDir = path.join(__dirname, 'public');
// app.use(express.static(staticDir));
// app.get('*', (req: Request, res: Response) => {
// 	res.sendFile('index.html', { root: viewsDir });
// });

// Export express instance
export default app;
