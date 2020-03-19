import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import './TagCard.css';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      background: '#D2691E',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 30,
      width: 130,
      padding: '0 30px',
      marginRight: 5,
    },
  });


export default function TagCard({name, description, questionsCount}){

    let history = useHistory()

    function onClick(){
        var url = `http://localhost:5000/questions/${name}`;
        axios.get(url)
                .then(function (response) {
                    history.push({
                        pathname: "/questions",
                        state: { tagQuestions : response.data }
                    })
                });
    }

    const classes = useStyles();

    return(
        <div className="card">
            <Button onClick={onClick} className={classes.root}>{name}</Button>
            {/* <span className="tag-name" onClick={onClick}>{name}</span> */}
            <p className="tag-description">{description}</p>
            <div className='tag-questions'>
                <span className="questions-number">{'מספר שאלות: ' + questionsCount}</span>
                <span className="questions-week-number">0 שאלות בשבוע האחרון</span>
            </div>
        </div>
    );
}