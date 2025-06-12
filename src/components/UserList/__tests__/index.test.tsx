import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserList } from '../index';

describe('UserList', () => {
  it('renders loading state', () => {
    render(<UserList users={[]} isLoading={true} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders empty state', () => {
    render(<UserList users={[]} isLoading={false} />);
    expect(screen.getByText('No users found')).toBeInTheDocument();
  });
});
