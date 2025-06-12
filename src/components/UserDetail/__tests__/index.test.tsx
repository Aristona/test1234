import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import { UserDetail } from '../index';
import { GitHubUser } from '../../../types/github';

const mockUser: GitHubUser = {
  id: 1,
  login: 'testuser',
  avatar_url: 'https://example.com/avatar.jpg',
  html_url: 'https://github.com/testuser',
  name: 'Test User',
  bio: 'Test bio',
  public_repos: 10,
  followers: 100,
  following: 50,
  location: 'Test Location',
  blog: 'https://testblog.com',
  twitter_username: 'testuser',
  company: 'Test Company',
};

describe('UserDetail', () => {
  it('renders loading state', () => {
    render(<UserDetail user={mockUser} isLoading={true} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders user details', () => {
    render(
      <BrowserRouter>
        <UserDetail user={mockUser} isLoading={false} />
      </BrowserRouter>
    );

    expect(screen.getByText('testuser')).toBeInTheDocument();
    expect(screen.getByText('Name: Test User')).toBeInTheDocument();
    expect(screen.getByText('Bio: Test bio')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('50')).toBeInTheDocument();
    expect(screen.getByText('Location: Test Location')).toBeInTheDocument();
    expect(screen.getByText('Company: Test Company')).toBeInTheDocument();
    expect(screen.getByText('https://testblog.com')).toBeInTheDocument();
    expect(screen.getByText('@testuser')).toBeInTheDocument();
  });

  it('renders user details with missing optional fields', () => {
    const userWithoutOptionalFields: GitHubUser = {
      ...mockUser,
      name: null,
      bio: null,
      location: null,
      blog: null,
      twitter_username: null,
      company: null,
    };

    render(
      <BrowserRouter>
        <UserDetail user={userWithoutOptionalFields} isLoading={false} />
      </BrowserRouter>
    );

    expect(screen.getByText('testuser')).toBeInTheDocument();
    expect(screen.queryByText('Name:')).not.toBeInTheDocument();
    expect(screen.queryByText('Bio:')).not.toBeInTheDocument();
    expect(screen.queryByText('Location:')).not.toBeInTheDocument();
    expect(screen.queryByText('Company:')).not.toBeInTheDocument();
    expect(screen.queryByText('Blog:')).not.toBeInTheDocument();
    expect(screen.queryByText('Twitter:')).not.toBeInTheDocument();
  });
}); 