import React, {useState} from 'react';
import { Button } from 'reactstrap';
import './Filters.css';

export default function Filters({sortByFilter}){
    
    function onFilterClicked(event){
        {sortByFilter(event.target.innerText)};
    }

    return(
        <div>
            <span id='views' onClick={onFilterClicked} className="filter-btn">הנצפה ביותר</span>
            <span id='votes' onClick={onFilterClicked} className="filter-btn">הפופולרי ביותר</span>
            <span id='newest' onClick={onFilterClicked} className="filter-btn">החדש ביותר</span>
        </div>
    );
}