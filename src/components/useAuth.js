import { useSelector } from 'react-redux';

import {
  selectUserEmail,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const userEmail = useSelector(selectUserEmail);

  return {
    isLoggedIn,
    isRefreshing,
    userEmail,
  };
};
