import { ConnectionOptions, connect } from 'mongoose';
import { MONGODB_URI } from '@config';
import logger from '@shared/Logger';

const connectDB = async (): Promise<void> => {
	try {
		const mongoURI: string = MONGODB_URI;
		const options: ConnectionOptions = {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
		};

		await connect(mongoURI, options);

		logger.info('Database Connected.', 'Database connection');
	} catch (err) {
		logger.error(err.message, 'Database connection');
		// Exit process with failure
		process.exit(1);
	}
};

export default connectDB;
