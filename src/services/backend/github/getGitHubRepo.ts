import { serverEnv } from '@/config/schemas/serverSchema';
import logger from '@/config/logger';
import { GitHubRepoData } from '@/interface/opensource';

const getGitHubRepo = async (url: string): Promise<any> => {
  const path = url.split('github.com/')[1];
  let repo: GitHubRepoData;
  let data: Response | undefined;
  try {
    data = await fetch(`https://api.github.com/repos/${path}`);
    repo = await data.json();
    return repo;
  } catch (e) {
    const error = 'Github repo fetch failed';
    logger.error(e, error);
    throw new Error(error);
  }
};
export default getGitHubRepo;
