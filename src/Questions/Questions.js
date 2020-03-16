import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import QuestionSummary from './QuestionSummary';
import Filters from './Filters';
import './Questions.css';
import { useLocation } from "react-router-dom";

export default function Questions(){


    const [questions, setQuestions] = useState([]);
    const [filter, setFilter] = useState(true);
    
    
    let location = useLocation();
    
    
    function sortByViews(a, b){
        if (b.view_count > a.view_count) return 1;
        if (a.view_count > b.view_count) return -1;
        return 0;
    }


    function sortByScore(a, b){
        if (b.score > a.score) return 1;
        if (a.score > b.score) return -1;
        return 0;
    }


    useEffect(() => {
        axios.get('http://localhost:5000/questions')
                .then(function (response) {
                   setQuestions(location.state.tagQuestions);
                   //setQuestions(response.data)
                });
    }, []);


    function sortByFilter(filter) {
        switch(filter) {
            case 'הנצפה ביותר':
                setFilter(true);
                break;
            case 'הפופולרי ביותר':
                setFilter(false);
                break;
            default:
                setFilter(true);
                break;
        }
    }


    const QuestionsSummary = filter ? questions.sort(sortByViews).map((question, i) =>
        <QuestionSummary title={question.title} description={question.description}
            tags={question.tags} viewCount={question.view_count} answersCount={question.answers_count}
                score={question.score} ownerName={question.owner_name} key={i}/>) :
                questions.sort(sortByScore).map((question, i) =>
        <QuestionSummary title={question.title} description={question.description}
            tags={question.tags} viewCount={question.view_count} answersCount={question.answers_count}
                score={question.score} ownerName={question.owner_name} key={i}/>);


    return(
        <div>
            {/* <Autocomplete className="autocomplete"
                id="free-solo-demo"
                freeSolo
                options={top100Films.map(option => option.title)}
                renderInput={params => (
                    <TextField {...params} label="שאלה..." margin="normal" variant="outlined" />
                )}
            /> */}
            <div className="questions-filter">
                <Filters sortByFilter={sortByFilter}/>  
            </div>
            <div className="questions">
                {QuestionsSummary}
            </div>
        </div>
    );
}