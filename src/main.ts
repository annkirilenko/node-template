import dotenv from 'dotenv';
import App from './app';
import logger from './lib/logger';

try {
    dotenv.config();

    const app = App();
    app.listen(process.env.APP_PORT, () => {
        logger.info(`APPLICATION STARTED on port ${process.env.APP_PORT}`);
    });
} catch (error) {
    logger.error('APPLICATION ERROR', error);
}