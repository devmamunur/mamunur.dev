import mongoose, { Model, Schema } from 'mongoose';
import { GitHubRepoData } from '@/interface/opensource';

const RepoSchema: Schema<GitHubRepoData> = new Schema({
  url: {
    type: String,
    required: true,
    min: 2,
    max: 256,
  },
  name: {
    type: String,
    required: true,
    min: 2,
    max: 256,
  },
  fullName: {
    type: String,
    required: true,
    min: 2,
    max: 256,
  },
  owner: {
    type: String,
    required: true,
    min: 2,
    max: 256,
  },
  description: {
    type: String,
    required: false,
    min: 2,
    max: 256,
  },
  stats: {
    forks: Number,
    stars: Number,
    issues: Number,
    subscribers: Number,
    watchers: Number,
  },
  topics: {
    type: [String],
    default: [],
  },
  orderNum: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
  pushedAt: {
    type: Date,
  },
});

const RepoModel: Model<GitHubRepoData> =
  mongoose.models.repos || mongoose.model<GitHubRepoData>('repos', RepoSchema);
export default RepoModel;
