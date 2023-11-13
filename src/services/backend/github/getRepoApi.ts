import connectMongo from '@/config/mongo';
import logger from '@/config/logger';
import RepoModel from '@/models/Repo';

export const getRepoApi = async (
  context: Request,
  username: string,
  addRepo: string
) => {
  await connectMongo();
  const log = logger.child({ username });
  const getRepo = {};

  const repoUrl = addRepo.endsWith('/') ? addRepo.slice(0, -1) : addRepo;

  const repo = await RepoModel.findOne({ url: repoUrl });

  return repoUrl;
};
