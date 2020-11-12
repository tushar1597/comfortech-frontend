import React from 'react';
import './avatar.css';
import 'react-phone-input-2/lib/material.css';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     avatar: props => ({
//         backgroundColor: props.bgcolor,
//       }),
//   }));
  
export default function IconLocked(props) {
    // const classes = useStyles(props);
  return (
    <Avatar className={props.className}>
        <LockOutlinedIcon />
    </Avatar>
  );
}