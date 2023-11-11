import mongoose, { Schema } from 'mongoose';

const RepoSchema = new Schema(
  {
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
    topics: [],
    dates: {
      createdAt: Date,
      updatedAt: Date,
      pushedAt: Date,
    },
    updatedAt: Date,
  },
  { versionKey: false }
);

const RepoModel = mongoose.model('repos', RepoSchema);
export default RepoModel;
