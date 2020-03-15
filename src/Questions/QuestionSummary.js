import React, {useState} from 'react';
import './QuestionSummary.css';

export default function QuestionSummary({title, description, tags, viewCount, answersCount, score, ownerName}){

    
    const tagSpans = tags.map((tag, i) =>
        <span className="tag">{tag}</span>);


    return(
        <div className="question-summary">
            <div className="stats-container">
                <div className="stats">
                    <div className="vote">
                        <span className="votes-num">{score}</span>
                        <span>הצבעות</span>
                    </div>
                    <div className="answered">
                        <strong className="answered-num">{answersCount}</strong>
                        <span>תשובות</span>
                    </div>
                    <div className="views">
                        <span>{viewCount}</span>
                    </div>
                </div>
            </div>
            <div className="summary">
                <span className='question-title'>{title}</span>
                <span className='question-brief'>{description}</span>
                <div className="question-tags">
                    {tagSpans}
                </div>
                <div className="user-action">
                    <span className="user-action-time">נשאל לפני חודשיים</span>
                    <span className="user-ask">{"על ידי: " + ownerName}</span>
                </div>
            </div>
        </div>
    );
}
