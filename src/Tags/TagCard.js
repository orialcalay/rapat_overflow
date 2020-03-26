import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import './TagCard.css';
import RapatButton from '../Common/RapatButton';


export default function TagCard({name, description, questionsCount}){

    let history = useHistory()

    function onClick(){
        var url = `http://167.71.32.57:5000/questions/${name}`;
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
            <RapatButton background='#D2691E' onClicked={onClick} name={name} />
            <p className="tag-description">{description}</p>
            <div className='tag-questions'>
                <span className="questions-number">{'מספר שאלות: ' + questionsCount}</span>
                <span className="questions-week-number">0 שאלות בשבוע האחרון</span>
            </div>
        </div>
    );
}