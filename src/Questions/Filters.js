import React, {useState} from 'react';
import RapatButton from '../Common/RapatButton';

export default function Filters({sortByFilter}){
    
    function onFilterClicked(event){
        {sortByFilter(event.target.innerText)};
    }

    return(
        <div style={{ display: 'flex' }}>
            <RapatButton background='#D2691E' onClicked={onFilterClicked} name='הנצפה ביותר' />
            <RapatButton background='#D2691E' marginRight='5px' onClicked={onFilterClicked} name='הפופולרי ביותר' />
            <RapatButton background='#D2691E' marginRight='5px' onClicked={onFilterClicked} name='החדש ביותר' />
        </div>
    );
}