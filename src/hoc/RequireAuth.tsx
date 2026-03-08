import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

interface RequireAuthProps {
  children?: React.ReactNode; // Могут быть элементы, текст или ничего
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const location = useLocation();
  const auth = false;
  if (!auth) {
    return <Navigate to={ROUTES.AUTH_PAGE} state={{ from: location }} />;
  }
  return children;
};
