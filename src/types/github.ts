export interface GitHubUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  name: string | null;
  location: string | null;
  blog: string | null;
  twitter_username: string | null;
  company: string | null;
}

export interface SearchResponse {
  items: GitHubUser[];
}

export interface ApiError {
  message: string;
  documentation_url?: string;
}