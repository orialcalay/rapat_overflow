import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import './TagCard.css';

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

    return(
        <div className="card">
            <span className="tag-name" onClick={onClick}>{name}</span>
            <p className="tag-description">{description}</p>
            <div className='tag-questions'>
                <span className="questions-number">{'מספר שאלות: ' + questionsCount}</span>
                <span className="questions-week-number">3 שאלות בשבוע האחרון</span>
            </div>
        </div>
    );
}