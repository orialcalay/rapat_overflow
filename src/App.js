import React, {useState} from 'react';
import './App.css';
import CommonMenu from './Menu/CommonMenu.js';
import Tags from './Tags/Tags';
import Register from './Register/Register';
import RecipeReviewCard from './RecipeReviewCard';
import Login from './Login/Login';
import Users from './Users/Users';
import Questions from './Questions/Questions';

function App() {

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isUsersOpen, setIsUsersOpen] = useState(false);
  const [isQuestionsOpen, setIsQuestionsOpen] = useState(false);
  const [isTagsOpen, setIsTagsOpen] = useState(true);

  function clickHandler(value){
    if(value.key == '3'){
      setIsRegisterOpen(false);
      setIsUsersOpen(false);
      setIsQuestionsOpen(false);
      setIsTagsOpen(false);
      setIsLoginOpen(true);
    }
    if(value.key == '4'){
      setIsLoginOpen(false);
      setIsUsersOpen(false);
      setIsQuestionsOpen(false);
      setIsTagsOpen(false);
      setIsRegisterOpen(true);
    }
    if(value.key == '5'){
      setIsLoginOpen(false);
      setIsUsersOpen(false);
      setIsRegisterOpen(false);
      setIsTagsOpen(false);
      setIsQuestionsOpen(true);
    }
    if(value.key == '2-1'){
      setIsLoginOpen(false);
      setIsRegisterOpen(false);
      setIsUsersOpen(false);
      setIsQuestionsOpen(false);
      setIsTagsOpen(true);
    }
    if(value.key == '2-2'){
      setIsLoginOpen(false);
      setIsRegisterOpen(false);
      setIsQuestionsOpen(false);
      setIsTagsOpen(false);
      setIsUsersOpen(true);
    }
  }

  return (
    <div style={{ direction: 'rtl' }}>
      <div>
        <CommonMenu clickHandler={clickHandler}/>
      </div>
      {isTagsOpen && <Tags /> }
      {isLoginOpen && <Login />}
      {isRegisterOpen && <Register />}
      {isQuestionsOpen && <Questions/>}
    </div>
  );
}

export default App;
