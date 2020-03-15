import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import QuestionSummary from './QuestionSummary';
import Filters from './Filters';
import './Questions.css';

export default function Questions(){


    const [questions, setQuestions] = useState([]);

    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 }];


    useEffect(() => {
        axios.get('http://localhost:5000/questions')
                .then(function (response) {
                   setQuestions(response.data);
                });
    }, []);


    const QuestionsSummary = questions.map((question, i) =>
        <QuestionSummary title={question.title} description={question.description}
            tags={question.tags} viewCount={question.view_vount} answersCount={question.answers_count}
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
                <Filters />  
            </div>
            <div className="questions">
                {QuestionsSummary}
            </div>
        </div>
    );
}