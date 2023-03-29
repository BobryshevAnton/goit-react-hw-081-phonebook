import { Outlet, Link } from 'react-router-dom';
import Section from './Section/Section';
import { Suspense } from 'react';
import Button from '@mui/material/Button';
import css from './app.module.css';
// import { selectUserEmail } from 'redux/auth/authSelectors';
// import { selectIsLoggedIn } from 'redux/auth/authSelectors';
// import { useSelector } from 'react-redux';
//
import { logOut } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { useAuth } from './useAuth';

export const SharedLayout = () => {
  const dispatch = useDispatch();
  // const userEmail = useSelector(selectUserEmail);
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const { userEmail } = useAuth();
  const { isLoggedIn } = useAuth();

  return (
    <Section>
      <nav className={css.appBar}>
        <div className={css.appNavLeft}>
          <Link to="/" className={css.appNav}>
            Home
          </Link>
          {isLoggedIn && (
            <Link to="/contacts" className={css.appNav}>
              Phone Book
            </Link>
          )}
        </div>
        {!isLoggedIn ? (
          <div className={css.appNavCenter}>
            <Link to="/register" className={css.appNav}>
              Register
            </Link>
            <Link to="/logIn" className={css.appNav}>
              Log In
            </Link>
          </div>
        ) : (
          <div className={css.appNavRight}>
            <p className={css.appNav}>Welcome, {userEmail}</p>
            <Button
              type="button"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => dispatch(logOut())}
            >
              Log out
            </Button>
          </div>
        )}
      </nav>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Section>
  );
};
