import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from 'redux/auth/authOperations';

import css from './signIn.module.css';

const theme = createTheme();

export default function SignIn() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
      return;
    } else if (name === 'password') {
      setPassword(value);
      return;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    const dataUser = {
      email: `${email}`,
      password: `${password}`,
    };
    dispatch(logIn(dataUser));
    setEmail('');
    setPassword('');
    console.log(dataUser);
  };
  return (
    <div className={css.signInCont}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={handleChange}
                autoComplete="off"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                value={password}
                onChange={handleChange}
                label="Password"
                type="password"
                id="password"
                autoComplete="off"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container></Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
