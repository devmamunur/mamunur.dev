import connectMongo from '@/config/mongo';
import RepoModel from '@/models/Repo';
import logger from '@/config/logger';
import { SetRepoData } from '@/interface/opensource';

export const getRepos = async () => {
  await connectMongo();
  try {
    return await RepoModel.find({});
  } catch (e) {
    logger.error(e, 'failed to get repos');
  }
};
