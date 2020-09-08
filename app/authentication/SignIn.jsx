import React, { useState } from 'react';
import clsx from 'clsx';
import {
  Button,
  Paper,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Backdrop,
  CircularProgress,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { operations } from './duck';

import useGlobalStyles from '../shared/styles';

const useStyles = makeStyles((theme) => ({
  page: {
    height: '100%',
  },
  container: {
    minWidth: '400px',
  },
  textField: {
    width: '100%',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const SignIn = () => {
  const [values, setValues] = useState({ username: '', password: '', showPassword: false });

  const { signIn } = operations;

  const dispatch = useDispatch();

  const { flex, flexContentCenter, flexCenter, flexColumn, p2, mt2 } = useGlobalStyles();

  const { page, container, textField, backdrop } = useStyles();

  const { authenticated, authenticating, error } = useSelector((store) => {
    return {
      authenticated: store.authn.authenticated,
      authenticating: store.authn.authenticating,
      error: store.authn.error,
    };
  });

  if (authenticated) {
    return <Redirect to="/" />;
  }

  const handleChange = (prop) => (e) => {
    const {
      target: { value },
    } = e;
    setValues({ ...values, [prop]: value });
  };

  const handleClickShowPassword = () => {
    const { showPassword } = values;
    setValues({ ...values, showPassword: !showPassword });
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleSignIn = () => {
    const { username, password } = values;
    dispatch(signIn(username, password));
  };

  const { username, password, showPassword } = values;

  return (
    <div className={clsx(flex, flexContentCenter, flexCenter, flexColumn, page)}>
      <Backdrop open={authenticating} className={backdrop}>
        <CircularProgress color="primary" />
      </Backdrop>
      <Paper className={clsx(container, p2, flex, flexCenter, flexColumn)}>
        <FormControl fullWidth variant="outlined" className={clsx(textField)}>
          <InputLabel>Username</InputLabel>
          <OutlinedInput
            type="text"
            value={username}
            onChange={handleChange('username')}
            labelWidth={70}
          />
        </FormControl>
        <FormControl fullWidth variant="outlined" className={clsx(textField, mt2)}>
          <InputLabel>Password</InputLabel>
          <OutlinedInput
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handleChange('password')}
            labelWidth={70}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          className={mt2}
          size="large"
          onClick={handleSignIn}
          color="primary"
          variant="outlined"
        >
          Sign In
        </Button>
        {!authenticating && error && (
          <Alert className={mt2} severity="error">
            {error.message}
          </Alert>
        )}
      </Paper>
    </div>
  );
};

export default SignIn;
