import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './RapatModal.css';


export default function RapatModal({text, modalOpen, handleClose}) {
    
    return (
        <div>
            <Dialog
            open={modalOpen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" className='modal-title'>העלאת השאלה הושלמה בהצלחה</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description" className='modal-text'>
                    {text}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    ביטול
                </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                    אישור
                </Button>
                </DialogActions>
            </Dialog>
        </div>
  );
}