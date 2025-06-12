import React, { useState } from 'react';

import { SearchBar } from '../../components/SearchBar';
import { UserList } from '../../components/UserList';
import { Pagination } from '../../components/Pagination';
import { useSearchUsers } from '../../hooks/useSearchUsers';
import { GITHUB_USER_PER_PAGE } from '../../constants';

import './index.scss';

export const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { users, isLoading, searchCount, searchUsers, currentPage, switchToPage, totalCount } = useSearchUsers();

  const hasSearchedAlready = searchCount > 0;

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    searchUsers(query);
  };

  return (
    <main className="page-HomePage">
      <div className="home-page-header">
        <h2>Search GitHub users</h2>
        <SearchBar onSearch={handleSearch} defaultQuery={searchQuery} />
      </div>
      <div className="home-page-users-list">
        {!hasSearchedAlready && <p>Enter a search query to get started</p>}
        {hasSearchedAlready && (
          <>
            <UserList users={users} isLoading={isLoading} />
            <Pagination
              currentPage={currentPage}
              totalItems={totalCount}
              itemsPerPage={GITHUB_USER_PER_PAGE}
              onPageChange={switchToPage}
            />
          </>
        )}
      </div>
    </main>
  );
};