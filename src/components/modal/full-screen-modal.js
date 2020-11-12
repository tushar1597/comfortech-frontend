import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import './modal.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenModal(props) {
  return (
    <div>
      <Dialog
        open={props.handleState}
        TransitionComponent={Transition}
        keepMounted
        fullScreen={true}
        style={props.style ? props.style : {}}
        classes={{root:"fs-modal",paper: "fs-paper"}}
        onClose={props.closeFunction}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
       {props.children}
      </Dialog>
    </div>
  );
}
