import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TagCard from './TagCard';
import './Tags.css';

export default function Tags({displayQuestions}){

    const [tags, setTags] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:5000/tags')
                .then(function (response) {
                    setTags(response.data);
                });
    }, []);


    const TagCards = tags.map((tag, i) =>
        <TagCard name={tag.tag_name} description={tag.tag_description}
            questionsCount={tag.tag_questions_number} displayQuestions={displayQuestions} key={i}/>);


    return(
        <div>
            {TagCards}
        </div>
    );
}