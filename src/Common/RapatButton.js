import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      background: '#D2691E',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 30,
      width: 150,
      padding: '0 30px',
      marginRight: 5,
    },
  });


export default function RapatButton({name, onClicked}){
    
    const classes = useStyles();

    return(
        <div>
            <Button onClick={onClicked} className={classes.root}>{name}</Button>
        </div>
    );
}