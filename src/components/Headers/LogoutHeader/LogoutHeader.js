import React from 'react';

import Button from '../../UI/Button/Button';

import classes from './LogoutHeader.module.css';

export default function LogoutHeader(props) {
  const logoutHandler = () => {
    props.onLogout();
  };

  return (
    <div className={classes.logout_header}>
      <Button className={classes.logout_button} onClick={logoutHandler}>
        Odjava
      </Button>
    </div>
  );
}
