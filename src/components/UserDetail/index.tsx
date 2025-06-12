import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { UserDetailProps } from './types';

import './index.scss';

export const UserDetail: React.FC<UserDetailProps> = ({ user, isLoading }) => {
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="user-detail-loading">
        <p>Loading...</p>
      </div>
    );
  }

  const fullName = user?.name ? `${user.login} (${user.name})` : user.login;

  return (
    <div className="com-UserDetail">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <div className="user-header">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="user-avatar"
        />
        <div className="user-info">
          <h1 className="user-username">{fullName}</h1>
          {user.bio && <p className="user-bio">Bio: {user.bio}</p>}
        </div>
      </div>

      <div className="user-stats">
        <div className="stat-item">
          <span className="stat-value">{user.public_repos}</span>
          <span className="stat-label">Repositories</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{user.followers}</span>
          <span className="stat-label">Followers</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{user.following}</span>
          <span className="stat-label">Following</span>
        </div>
      </div>

      <div className="user-details">
        {user.location && (
          <div className="detail-item">
            <strong>Location:</strong> {user.location}
          </div>
        )}
        {user.company && (
          <div className="detail-item">
            <strong>Company:</strong> {user.company}
          </div>
        )}
        {user.blog && (
          <div className="detail-item">
            <strong>Blog:</strong>{' '}
            <a
              href={user.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              {user.blog}
            </a>
          </div>
        )}
        {user.twitter_username && (
          <div className="detail-item">
            <strong>Twitter:</strong>{' '}
            <a
              href={`https://twitter.com/${user.twitter_username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              @{user.twitter_username}
            </a>
          </div>
        )}

        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="external-link"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}; 