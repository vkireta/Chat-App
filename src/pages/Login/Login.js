import React, { useState } from 'react';
import Card from '../../components/UI/Card/Card';
import Button from '../../components/UI/Button/Button';
import Avatar from '../../components/UI/Avatar/Avatar';

import classes from './Login.module.css';

export default function Login(props) {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [usernameIsValid, setUsernameIsValid] = useState(true);
  
  const onSubmit = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0) {
      setUsernameIsValid(false);
      return;
    }
    setUsernameIsValid(true);
    props.onLogin(enteredUsername);
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  return (
    <Card
      className={
        !usernameIsValid ? `${classes.login} ${classes.invalid}` : classes.login
      }
    >
      <form onSubmit={onSubmit}>
        <Avatar  />
        <input
          type='text'
          placeholder='Your chat name'
          onChange={usernameChangeHandler}
        />
        <Button type='submit'>OK</Button>
      </form>
    </Card>
  );
}
