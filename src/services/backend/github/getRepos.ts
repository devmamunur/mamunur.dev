import connectMongo from '@/config/mongo';
import RepoModel from '@/models/Repo';
import logger from '@/config/logger';

export const getRepos = async () => {
  await connectMongo();
  try {
    return await RepoModel.find({});
  } catch (e) {
    const error = 'failed to get repos';
    logger.error(e, error);
    throw new Error(error);
  }
};
