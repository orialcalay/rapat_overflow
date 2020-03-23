import React, {useState} from 'react';
import './App.css';
import CommonMenu from './Menu/CommonMenu.js';
import Tags from './Tags/Tags';
import Register from './Register/Register';
import Login from './Login/Login';
import Users from './Users/Users';
import QuestionList from './Questions/QuestionList';
import AddQuestion from './Questions/AddQuestion';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";

function App() {

  return (
     <Router>
       <div style={{ direction: 'rtl' }}>
          <CommonMenu />
          <Route path="/" exact component={Tags}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/tags" component={Tags}/>
          <Route path="/questions" exact component={QuestionList}/>
          <Route path="/questions/add" component={AddQuestion}/>
       </div>
     </Router>
  );
}

export default App;