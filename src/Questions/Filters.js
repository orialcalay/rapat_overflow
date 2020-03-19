import React, {useState} from 'react';
import './Filters.css';
import RapatButton from '../Common/RapatButton';

export default function Filters({sortByFilter}){
    
    function onFilterClicked(event){
        {sortByFilter(event.target.innerText)};
    }

    return(
        <div className='filters'>
            {/* <span id='views' onClick={onFilterClicked} className="filter-btn">הנצפה ביותר</span>
            <span id='votes' onClick={onFilterClicked} className="filter-btn">הפופולרי ביותר</span>
            <span id='newest' onClick={onFilterClicked} className="filter-btn">החדש ביותר</span> */}
            <RapatButton onClicked={onFilterClicked} name='הנצפה ביותר' />
            <RapatButton onClicked={onFilterClicked} name='הפופולרי ביותר' />
            <RapatButton onClicked={onFilterClicked} name='החדש ביותר' />
        </div>
    );
}