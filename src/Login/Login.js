import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Login.css';

export default function Login() {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState(false);

  function userLogin(){
      axios({
          method: 'post',
          url: 'http://167.71.32.57:5000/login',
          data: {
              name: userName,
              password: password
          }
      })
      .then(function (response) {
          if(response.data == 'True'){
            toggle();
          }
      });
  }

  const toggle = () => setModal(!modal);

  return (
    <div className="login">
      <MuiThemeProvider>
        <div>
          <TextField
            label="Error"
            error 
            variant="outlined"
            hintText="הקלד שם משתמש"
            floatingLabelText="שם משתמש"
            onChange = {(event,newValue) => setUserName(newValue)}
            />
          <br/>
            <TextField
              type="password"
              hintText="הקלד סיסמה"
              floatingLabelText="סיסמה"
              onChange = {(event,newValue) => setPassword(newValue)}
              />
            <br/>
            <RaisedButton className="raised-btn" label="כניסה" primary={true} onClick={userLogin}/>
        </div>
        </MuiThemeProvider>
        <div className="modal">
          <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>הערת אגב</ModalHeader>
              <ModalBody>
                נכנסת לאתר בהצלחה!
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
              </ModalFooter>
          </Modal>
        </div>
    </div>
  );
}