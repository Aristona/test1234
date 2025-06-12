import axios from 'axios';
import { GITHUB_API_BASE_URL, GITHUB_USER_PER_PAGE } from '../constants';
import { GitHubUser, SearchResponse } from '../types/github';

export const githubApi = {
  searchUsers: async (query: string, page: number = 1): Promise<SearchResponse> => {
    const response = await axios.get(`${GITHUB_API_BASE_URL}/search/users`, {
      params: {
        q: query,
        page,
        per_page: GITHUB_USER_PER_PAGE,
      },
    });

    const items = response?.data?.items || [];

    return {
      items,
    };
  },

  getUserDetails: async (username: string): Promise<GitHubUser> => {
    const response = await axios.get(`${GITHUB_API_BASE_URL}/users/${username}`);
    return response.data;
  },
}; 