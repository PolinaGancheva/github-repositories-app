export interface IGithubRepository {
  id: number;
  name: string;
  owner: IOwner;
}

export interface IOwner {
  id: number;
  login: string;
  avatar_url: string;
}

export interface IRepoInfo {
  id: number;
  full_name: string;
  owner: IOwner;
  description: string;
  created_at: string;
  pushed_at: string;
  watchers_count: number;
  forks_count: number;
}
