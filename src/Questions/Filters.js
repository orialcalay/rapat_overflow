import React, {useState} from 'react';
import { Button } from 'reactstrap';
import './Filters.css';

export default function Filters(){
    
    function onFilterClicked(event){
        var a = event.target.innerText;
    }

    return(
        <div>
            <span id='popular' onClick={onFilterClicked} className="filter-btn">פופולריות</span>
            <span id='newest' onClick={onFilterClicked} className="filter-btn">החדש ביותר</span>
            <span id='tags' onClick={onFilterClicked} className="filter-btn">תגים</span>
        </div>
    );
}