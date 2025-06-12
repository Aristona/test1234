import type { GitHubUser } from '../../types/github';

export interface UserListProps {
  users: GitHubUser[];
  isLoading: boolean;
}
