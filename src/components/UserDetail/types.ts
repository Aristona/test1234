import type { GitHubUser } from '../../types/github';

export interface UserDetailProps {
  user: GitHubUser;
  isLoading: boolean;
}