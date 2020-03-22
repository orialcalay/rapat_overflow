import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Login.css';
import RapatModal from '../Modals/RapatModal';
import { red } from 'color-name';
export default function Login({loggedIn}) {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nameError,setNameError] = useState("");
  const [passwordError,setPasswordError] = useState("");

 function validate(){
  if(!userName) {setNameError("must fill name"); return false;}
  if(!password) {setPasswordError("Must fill password"); return false;}
  return true;

 }

  function userLogin(){
    const isValid = validate();
    if (isValid){

    
      axios({
          method: 'post',
          url: 'http://localhost:5000/login',
          data: {
              name: userName,
              password: password
          }
      })
      .then(function (response) {
          if(response.data == 'True'){
          }
      });
      setIsModalOpen(true);
      loggedIn(userName);
    }
  }

  /*
  function handleModalClick(){
    setIsModalOpen(false);
} */

  return (
    <div className="login">
      <MuiThemeProvider>
        <div>
          <TextField
            hintText="הקלד שם משתמש"
            floatingLabelText="שם משתמש"
            onChange = {(event,newValue) => setUserName(newValue)}
            
            />
          <div className="nameError"> {nameError} </div>
          <br/>
            <TextField
              type="password"
              error
              hintText="הקלד סיסמה"
              floatingLabelText="סיסמה"
              onChange = {(event,newValue) => setPassword(newValue)}
              />
              <div className="passwordError"> {passwordError} </div>
            <br/>
            <RaisedButton className="raised-btn" label="כניסה" primary={true} onClick={userLogin}/>
        </div>
        {isModalOpen && <RapatModal handleClick={()=>setIsModalOpen(false)} title='התחברת בהצלחה' body='ברוך הבא'/>}
        </MuiThemeProvider>
    </div>
  );
}