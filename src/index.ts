import { PORT } from '@config';
import { APP_NAME } from '@shared/constants';
import app from '@server';
import logger from '@shared/Logger';

// Start the server
const port = Number(PORT);
app.listen(port, () => {
	logger.info(`${APP_NAME} server started on port: ${PORT}`);
});
