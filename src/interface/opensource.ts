export interface GitHubRepoData {
  url: string;
  fullName: string;
  name: string;
  owner: string;
  description: string;
  topics: string[];
  stats: {
    issues: number;
    stars: number;
    forks: number;
    watchers: number;
    subscribers: number;
  };
  dates: {
    createdAt: Date;
    updatedAt: Date;
    pushedAt: Date;
  };
  updatedAt: Date;
}

export interface SetRepoData {
  name: string;
  owner: {
    login: string;
  };
  description: string;
  topics: string[];
  open_issues_count: number;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  subscribers_count: number;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  error: {
    message: string;
  };
}
