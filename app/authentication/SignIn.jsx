import React, { useState } from 'react';
import { Form, Button, Segment, Message } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { operations } from './duck';

import styles from '../shared/styles';

const { flex, flexContentCenter, flexCenter, flexColumn, col3 } = styles;

const SignIn = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = operations;

  const dispatch = useDispatch();

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

  const onUsernameChange = (e) => {
    const {
      target: { value },
    } = e;
    setUserName(value);
  };

  const onPasswordChange = (e) => {
    const {
      target: { value },
    } = e;
    setPassword(value);
  };

  const handleSignIn = () => {
    dispatch(signIn(username, password));
  };

  return (
    <div
      css={[
        flex,
        flexContentCenter,
        flexCenter,
        flexColumn,
        {
          height: '100%',
        },
      ]}
    >
      <Form
        loading={authenticating}
        css={[
          col3,
          {
            minWidth: '300px',
          },
        ]}
      >
        <Segment stacked>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Username"
            value={username}
            onChange={onUsernameChange}
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
            value={password}
            onChange={onPasswordChange}
          />
          <Button
            content="Sign In"
            fluid
            size="large"
            onClick={handleSignIn}
            disabled={authenticating}
          />
        </Segment>
      </Form>
      {!authenticating && error && (
        <Message warning>
          <p>{error.message}</p>
        </Message>
      )}
    </div>
  );
};

export default SignIn;
