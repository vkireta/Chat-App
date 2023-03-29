import React from 'react';

import classes from './MainHeader.module.css';
import logo from '../../../media/Star.png';

export default function MainHeader() {
  return (
    <div className={classes.header}>
      <img src={logo} alt='logo' />
      <h1>Glare</h1>
    </div>
  );
}
