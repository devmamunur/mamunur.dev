import logger from '@/config/logger';
import RepoModel from '@/models/Repo';
import connectMongo from '@/config/mongo';
import mongoose from 'mongoose';
import getGitHubRepo from '@/services/backend/github/getGitHubRepo';
import { GitHubRepoData, SetRepoData } from '@/interface/opensource';

export const addGitHubRepo = async (
  context: Request,
  username: string,
  addRepo: string
) => {
  await connectMongo();
  const log = logger.child({ username });
  let getRepo: GitHubRepoData | null;

  const repoUrl = addRepo.endsWith('/') ? addRepo.slice(0, -1) : addRepo;

  const repo = await RepoModel.findOne({ url: repoUrl });

  if (repo) {
    const error = `repo already exists for: ${repoUrl}`;
    log.error(error);
    return { error };
  }

  let repoData: SetRepoData;
  try {
    repoData = await getGitHubRepo(repoUrl);
  } catch (e) {
    const error = `failed to get data for repo: ${repoUrl}`;
    log.error(e, error);
    return { error };
  }
  if (repoData.error) {
    return { error: repoData.error.message };
  }
  const id = new mongoose.Types.ObjectId();
  try {
    await RepoModel.create({
      _id: id,
      url: repoUrl,
      fullName: repoData.name,
      name: repoData.name,
      owner: repoData.owner.login,
      description: repoData.description,
      topics: repoData.topics,
      stats: {
        issues: repoData.open_issues_count,
        stars: repoData.stargazers_count,
        forks: repoData.forks_count,
        watchers: repoData.watchers_count,
        subscribers: repoData.subscribers_count,
      },
      dates: {
        createdAt: repoData.created_at,
        updatedAt: repoData.updated_at,
        pushedAt: repoData.pushed_at,
      },
      updatedAt: new Date(),
    });
    getRepo = await RepoModel.findById(id);
  } catch (e) {
    const error = `failed to add repo for username: ${username}`;
    log.error(e, error);
    return { error };
  }
  return JSON.parse(JSON.stringify(getRepo));
};
