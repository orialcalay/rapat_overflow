import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      background: props => props.background,
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 30,
      width: 150,
      padding: '0 30px',
      marginRight: props => props.marginRight,
      marginTop: props => props.marginTop,
    },
  });


export default function RapatButton({name, onClicked, ...props}){
    
    const classes = useStyles(props);

    return(
        <div>
            <Button onClick={onClicked} className={classes.root}>{name}</Button>
        </div>
    );
}