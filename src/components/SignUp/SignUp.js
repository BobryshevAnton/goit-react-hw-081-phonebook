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
import css from './signUp.module.css';
//
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { registerUser } from 'components/redux/auth/authOperations';

const theme = createTheme();

export default function SignUp() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    // const data = new FormData(event.currentTarget);
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
      return;
    } else if (name === 'email') {
      setEmail(value);
      return;
    } else if (name === 'password') {
      setPassword(value);
      return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);

    const dataUser = {
      name: `${name}`,
      email: `${email}`,
      password: `${password}`,
    };
    console.log(dataUser);
    dispatch(registerUser(dataUser));
    setName('');
    setEmail('');
    setPassword('');
  };
  // console.log({
  //   name: data.get('name'),
  //   email: data.get('email'),
  //   password: data.get('password'),
  // });

  return (
    <div className={css.signUpCont}>
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
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    required
                    fullWidth
                    id="firstName"
                    label="Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label="Password"
                    // type="password"
                    id="password"
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item></Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
