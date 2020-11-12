import React from 'react';
import './avatar.css';
import 'react-phone-input-2/lib/material.css';
import Avatar from '@material-ui/core/Avatar';
import LockOpenIcon from '@material-ui/icons/LockOpen';

export default function IconUnlocked(props) {
  return (
    <Avatar className={props.className}>
        <LockOpenIcon />
    </Avatar>
  );
}