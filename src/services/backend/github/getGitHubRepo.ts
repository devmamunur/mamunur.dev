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
  } catch (e: any) {
    logger.error(
      e,
      `github repo fetch failed for user: ${serverEnv.GITHUB_USERNAME}`
    );
    throw new Error(e);
  }
};
export default getGitHubRepo;
