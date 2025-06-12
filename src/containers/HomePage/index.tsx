import React from 'react';

import { SearchBar } from '../../components/SearchBar';
import { UserList } from '../../components/UserList';
import { useSearchUsers } from '../../hooks/useSearchUsers';

import './index.scss';

export const HomePage: React.FC = () => {
  const { users, isLoading, searchCount, searchUsers } = useSearchUsers();
  const hasSearchedAlready = searchCount > 0;

  return (
    <main className="page-HomePage">
      <div className="home-page-header">
        <h2>Search GitHub users</h2>
        <SearchBar onSearch={searchUsers} />
      </div>
      <div className="home-page-users-list">
        {!hasSearchedAlready && <p>Enter a search query to get started</p>}
        {hasSearchedAlready && <UserList users={users} isLoading={isLoading} />}
      </div>
    </main>
  );
};