import React, {useState} from 'react';
import './Card.css';

export default function Card(){
    return(
        <div className="card">
            <span className="tag-name">javascript</span>
            <p className="tag-description">שפה עילית, בעלת טיפוסיות סטטית אשר מפותחת ע"י מייקרוסופט</p>
            <div>
                <span className="questions-number">15 שאלות</span>
                <span className="questions-week-number">3 שאלות בשבוע האחרון</span>
            </div>
        </div>
    );
}