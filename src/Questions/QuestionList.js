import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import QuestionReview from './QuestionReview';
import Filters from './Filters';
import './QuestionList.css';
import { useLocation } from "react-router-dom";
import RapatButton from '../Common/RapatButton';


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

    useEffect(() => {
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


    const QuestionsReview = filter ? questions.sort(sortByViews).map((question, i) =>
        <QuestionReview title={question.title} description={question.description}
            tags={question.tags} viewCount={question.view_count} answersCount={question.answers_count}
                score={question.score} ownerName={question.owner_name} key={i}/>) :
                questions.sort(sortByScore).map((question, i) =>
        <QuestionReview title={question.title} description={question.description}
            tags={question.tags} viewCount={question.view_count} answersCount={question.answers_count}
                score={question.score} ownerName={question.owner_name} key={i}/>);

    let history = useHistory();

    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 }];

    return(
        <div className='questions-list-container'>
            <Autocomplete
                id="free-solo-demo"
                freeSolo
                onChange={(event, values) => console.log(values) }
                options={top100Films.map(option => option.title)}
                renderInput={params => (
                <TextField {...params} label="freeSolo" margin="normal" variant="outlined" />
                )}
            />
            <span className='note'>דע לך : אין הביישן למד!</span>
            <div className='questions-list-main'>
                <div className="questions-filter">
                    <Filters sortByFilter={sortByFilter}/> 
                    <RapatButton background='linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' marginTop='30px'
                        name='הוסף שאלה' onClicked={() => history.push("/questions/add")}/>
                </div>
                <div className="questions">
                    {QuestionsReview}
                </div>
            </div>
        </div>
    );
}