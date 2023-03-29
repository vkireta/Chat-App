import React from 'react';
import classes from './Avatar.module.css';
import blankAvatar from './../../../media/Avatar.svg';

export default function Avatar() {
  return (
    <div className={classes.avatar}>
      <img src={blankAvatar} alt='avatar'  />
    </div>
  );
}
