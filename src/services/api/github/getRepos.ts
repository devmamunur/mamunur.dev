import connectMongo from '@/config/mongo';
import RepoModel from '@/models/Repo';
import logger from '@/config/logger';

export const getRepos = async () => {
  await connectMongo();
  try {
    return await RepoModel.find({}).sort({ orderNum: 1 });
  } catch (e) {
    const error = 'Failed to get repos';
    logger.error(e, error);
    throw new Error(error);
  }
};
