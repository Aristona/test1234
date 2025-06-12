import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../services/githubApi';

export const useUserDetails = () => {
  const { username } = useParams<{ username: string }>();

  const { data: user, isLoading } = useQuery({
    queryKey: ['userDetails', username],
    queryFn: () => githubApi.getUserDetails(username!),
    enabled: !!username,
  });

  return {
    user,
    isLoading,
  };
}; 