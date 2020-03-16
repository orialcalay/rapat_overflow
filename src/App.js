import React, {useState} from 'react';
import './App.css';
import CommonMenu from './Menu/CommonMenu.js';
import Tags from './Tags/Tags';
import Register from './Register/Register';
import RecipeReviewCard from './RecipeReviewCard';
import Login from './Login/Login';
import Users from './Users/Users';
import Questions from './Questions/Questions';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";

function App() {

  return (
     <Router>
       <div style={{ direction: 'rtl' }}>
           <div>
             <CommonMenu />
           </div>
           <Route path="/" exact component={Tags}/>
           <Route path="/login" component={Login}/>
           <Route path="/register" component={Register}/>
           <Route path="/tags" component={Tags}/>
           <Route path="/questions" component={Questions}/>
       </div>
     </Router>
  );
}

export default App;