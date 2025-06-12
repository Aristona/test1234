import React from 'react';
import { Link } from 'react-router-dom';
import type { UserListProps } from './types';

import './index.scss';

export const UserList: React.FC<UserListProps> = ({ users, isLoading }) => {
  if (isLoading) {
    return (
      <div className="user-list-loading">
        <p>Loading...</p>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="user-list-empty">
        <p>No users found</p>
      </div>
    );
  }

  return (
    <div className="com-UserList">
      {users.map((user) => (
        <Link
          to={`/users/${user.login}`}
          key={user.id}
          className="user-card"
        >
          <div className="user-card-content">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="user-avatar"
            />
            <h4 className="user-username">{user.login}</h4>
            {user.name && (
              <p className="user-name">{user.name}</p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}; 