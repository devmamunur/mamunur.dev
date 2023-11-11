import { serverEnv } from '@/config/schemas/serverSchema';
import mongoose, { connect, ConnectOptions } from 'mongoose';
import logger from '@/config/logger';

let connection: typeof mongoose | null;

const connectMongo = async (): Promise<typeof mongoose | null> => {
  const { DEVMAMUNUR_MONGO_CONNECTION_STRING } = serverEnv;

  if (!DEVMAMUNUR_MONGO_CONNECTION_STRING) {
    throw new Error(
      'Please define the DEVMAMUNUR_MONGO_CONNECTION_STRING environment variable (if local add to .env file)'
    );
  }

  if (connection) {
    return connection;
  }

  try {
    const options: ConnectOptions = {
      autoIndex: true,
      family: 4,
      maxPoolSize: 10,
    };
    connection = await connect(DEVMAMUNUR_MONGO_CONNECTION_STRING, options);
    logger.info('DB connection successful:', connection);
    return connection;
  } catch (error) {
    const errorMessage = (error as Error).message;
    logger.error('DB connection failed:', errorMessage);
    throw error;
  }
};

export default connectMongo;
