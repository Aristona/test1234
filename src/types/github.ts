// Taken from https://github.com/UltiRequiem/use-github/blob/76e410e/src/user.ts#L29
export interface GitHubUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  name: string;
  location: string | null;
  blog: string | null;
  twitter_username: string | null;
  company: string | null;
  email: string | null;
};

export interface SearchResponse {
  items: GitHubUser[];
  total_count: number;
};

export interface ApiError {
  message: string;
  documentation_url?: string;
};
