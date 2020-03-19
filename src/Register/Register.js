import React, { useState } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import './Register.css';
import RapatModal from '../Modals/RapatModal';
export default function Register() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  
  function handleClick(){

    axios({
        method: 'post',
        url: 'http://localhost:5000/addUser',
        data: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password
        }
    })
    .then(function (response) {
        if(response.data == 'True'){
          
        }
    });
    setIsModalOpen(true)
  }

  function handleModalClick(){
      setIsModalOpen(false);
  }

  return (

      <div className="register">
        <MuiThemeProvider>
          <div>
           <TextField
             hintText="הקלד שם פרטי"
             floatingLabelText="שם פרטי"
             onChange = {(event,newValue) => setFirstName(newValue)}
             />
           <br/>
           <TextField
             hintText="הקלד שם משפחה"
             floatingLabelText="שם משפחה"
             onChange = {(event,newValue) => setLastName(newValue)}
             />
           <br/>
           <TextField
             hintText="הקלד אימייל"
             type="email"
             floatingLabelText="אימייל"
             onChange = {(event,newValue) => setEmail(newValue)}
             />
           <br/>
           <TextField
             type = "password"
             hintText="הקלד סיסמה"
             floatingLabelText="סיסמה"
             onChange = {(event,newValue) => setPassword(newValue)}
             /> 
           <br/>
           <RaisedButton label="x" className="raised-button" label="הירשם" primary={true} onClick={handleClick}/>
          </div>
{isModalOpen && <RapatModal handleClick={handleModalClick} title='נרשמת בהצלחה!' body='לביטול הפעולה לחץ cancel'/> }
         </MuiThemeProvider>
      </div>
    );
  }

