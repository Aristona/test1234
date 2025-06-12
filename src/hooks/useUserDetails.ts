import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { GithubService } from '../services/GithubService';

export const useUserDetails = () => {
  const { username } = useParams<{ username: string }>();

  const { data: user, isLoading } = useQuery({
    queryKey: ['userDetails', username],
    queryFn: () => GithubService.getUserDetails(username!),
    enabled: !!username,
  });

  return {
    user,
    isLoading,
  };
}; 