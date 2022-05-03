import React from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import useStyles from './styles';
import Input from './Input';

export default function Auth() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);

  const [isSignup, setIsSignup] = React.useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = () => {
    // TODO
  };
  const handleSubmit = () => {
    // TODO
  };

  const switchMode = () => {
    setIsSignup((prev) => !prev);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignup && (
                <>
                  <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                  <Input name="lastName" label="Last Name" handleChange={handleChange} />
                </>
              )
            }
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" handleShowPassword={handleShowPassword} />}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {isSignup ? 'Sign Up' : 'Sign in' }
          </Button>
        </form>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Button onClick={switchMode}>
              {isSignup ? 'Already have an Account? Sign in' : 'Don\'t have an account? Sign up'}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
