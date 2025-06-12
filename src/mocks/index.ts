import type { GitHubUser } from '../types/github';

export const mockUser: GitHubUser = {
  id: 1,
  login: 'testuser',
  avatar_url: 'https://example.com/avatar.jpg',
  html_url: 'https://github.com/testuser',
  name: 'Test User',
  bio: 'Test bio',
  public_repos: 10,
  followers: 100,
  following: 50,
  location: 'Test Location',
  blog: 'https://testblog.com',
  twitter_username: 'testuser',
  company: 'Test Company',
};
