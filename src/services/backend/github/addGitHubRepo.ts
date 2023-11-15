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
    const error = 'Repo already exists';
    throw new Error(error);
  }

  let repoData: SetRepoData;
  try {
    repoData = await getGitHubRepo(repoUrl);
  } catch (e) {
    const error = 'Failed to get data';
    log.error(e, error);
    throw new Error(error);
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
    const error = 'Failed to add repo';
    log.error(e, error);
    throw new Error(error);
  }
  return JSON.parse(JSON.stringify(getRepo));
};
