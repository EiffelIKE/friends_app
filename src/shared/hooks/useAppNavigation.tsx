import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export const useAppNavigation = () => {
  const navigate = useNavigate();

  const navigation = useCallback((url: string) => navigate(url), [navigate]);

  return { navigation };
};
