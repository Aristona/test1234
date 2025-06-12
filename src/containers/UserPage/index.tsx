import React from 'react';
import { UserDetail } from '../../components/UserDetail';
import { useUserDetails } from '../../hooks/useUserDetails';

import './index.scss';

export const UserPage: React.FC = () => {
  const { user, isLoading } = useUserDetails();

  const fallbackNode = <p>Loading...</p>;

  if (!user) {
    return fallbackNode;
  }

  return (
    <main className="page-UserPage">
      <React.Suspense fallback={fallbackNode}>
        <UserDetail user={user} isLoading={isLoading} />
      </React.Suspense>
    </main>
  );
};
