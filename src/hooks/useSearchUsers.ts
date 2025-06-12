import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../services/githubApi';
import { GitHubUser } from '../types/github';

export const useSearchUsers = () => {
  const [searchCount, setSearchCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const { data, isLoading } = useQuery({
    queryKey: ['searchUsers', searchQuery],
    queryFn: () => githubApi.searchUsers(searchQuery),
    enabled: searchQuery.length > 0,
  });

  const searchUsers = (query: string) => {
    setSearchCount(prev => prev + 1);
    setSearchQuery(query);
  };

  return {
    users: data?.items || [] as GitHubUser[],
    isLoading,
    searchUsers,
    searchCount,
  };
}; 