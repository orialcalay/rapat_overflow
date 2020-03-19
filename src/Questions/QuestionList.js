import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import QuestionSummary from './QuestionSummary';
import Filters from './Filters';
import './QuestionList.css';
import { useLocation } from "react-router-dom";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 30,
      width: 130,
      padding: '0 30px',
      marginTop: -80,
      marginRight: 1230,
    },
  });


export default function QuestionList(){

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

    function compareTimestampToCurrent(timestamp){
        var current = Date.now();
        
    }


    useEffect(() => {
        // var timestamp = Date.now(); // This would be the timestamp you want to format
        // var d = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp);

        if(location.state !== undefined){
            setQuestions(location.state.tagQuestions);
        }
        else{
            axios.get('http://localhost:5000/questions')
                .then(function (response) {
                   setQuestions(response.data)
                });
        }
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

    const classes = useStyles();
    let history = useHistory()

    return(
        <div className='questions-list-container'>
            <span className='note'>דע לך : אין הביישן למד!</span>
            <div className='questions-list-main'>
                <div className="questions-filter">
                    <Filters sortByFilter={sortByFilter}/> 
                    <Button onClick={() => history.push("/questions/add")} className={classes.root}>הוסף שאלה</Button>
                </div>
                <div className="questions">
                    {QuestionsSummary}
                </div>
            </div>
        </div>
    );
}