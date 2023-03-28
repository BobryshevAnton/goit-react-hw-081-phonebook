import { Outlet, Link } from 'react-router-dom';
import Section from './Section/Section';
import { Suspense } from 'react';
import Button from '@mui/material/Button';

import css from './app.module.css';

export const SharedLayout = () => {
  return (
    <Section>
      <nav className={css.appBar}>
        <div className={css.appNavLeft}>
          <Link to="/" className={css.appNav}>
            Home
          </Link>
          <Link to="/phonebook" className={css.appNav}>
            Phone Book
          </Link>
        </div>
        <div className={css.appNavCenter}>
          <Link to="/register" className={css.appNav}>
            Register
          </Link>
          <Link to="/logIn" className={css.appNav}>
            Log In
          </Link>
        </div>
        <div className={css.appNavRight}>
          <p className={css.appNav}>regestr name:</p>
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Log out
          </Button>
        </div>
      </nav>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Section>
  );
};
