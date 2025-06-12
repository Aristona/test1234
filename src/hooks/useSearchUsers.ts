import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../services/githubApi';
import { GitHubUser } from '../types/github';

export const useSearchUsers = () => {
  const [searchCount, setSearchCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ['searchUsers', searchQuery, currentPage],
    queryFn: () => githubApi.searchUsers(searchQuery, currentPage),
    enabled: searchQuery.length > 0,
  });

  const searchUsers = (query: string) => {
    setSearchCount(prev => prev + 1);
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const switchToPage = (page: number) => {
    setCurrentPage(page);
  };

  return {
    users: data?.items || [] as GitHubUser[],
    isLoading,
    searchUsers,
    searchCount,
    currentPage,
    switchToPage,
    totalCount: data?.total_count || 0,
  };
}; 