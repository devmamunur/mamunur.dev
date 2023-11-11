import connectMongo from '@/config/mongo';
import logger from '@/config/logger';

export const getRepoApi = async (
  context: any,
  username: any,
  addRepo: any
): Promise<any> => {
  await connectMongo();
  const log = logger.child({ username });
  let getRepo = {};

  const repoUrl = addRepo.url.endsWith('/')
    ? addRepo.url.slice(0, -1)
    : addRepo.url;

  return repoUrl;
};
