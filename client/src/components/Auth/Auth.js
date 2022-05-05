import React from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AUTH } from '../../constants/actionTypes';

import useStyles from './styles';
import Input from './Input';
import Icon from './Icon';

export default function Auth() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);

  const [isSignup, setIsSignup] = React.useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

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

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: AUTH, data: { result, token } });
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = (error) => {
    console.log('Google Sign in was unsuccessful');
    console.log(error);
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
                  <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                </>
              )
            }
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" autoFocus />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" handleShowPassword={handleShowPassword} />}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {isSignup ? 'Sign Up' : 'Sign in'}
          </Button>
          <GoogleLogin
            clientId="219267673512-7gveiihpgj3un606fnbvf0e4vo8u7tse.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disables}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
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
