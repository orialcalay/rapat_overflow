import React, {useState} from 'react';
import './AddQuestion.css';
// get our fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListOl } from '@fortawesome/free-solid-svg-icons';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@material-ui/core';
import { makeStyles, rgbToHex } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';

const lbc = lightBlue[500]

const useStyles = makeStyles({
    root: {
        background: lbc,
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 30,
        width: 150,
        padding: '0 30px',
        marginTop: 20,
    },
  });


export default function AddQuestion(){
    
    const classes = useStyles();

    return(
        <div className='add-question-main'>
            <div>
                <span className='note'>דע לך : אין הביישן למד!</span>
            </div>
            <div className='add-question-body-main'>
                <div className='add-question-container'>
                    <div className='add-question-title'>
                        <span className='title-text'>כותרת</span>
                        <span className='title-description'>ציין במדויק ובאופן ממוקד מהי שאלתך - דמיין שאתה שואל שאלה לאדם אחר</span>
                        <input type="text" placeholder='למשל, כיצד ניתן לחולל קבצי h באמצעות מחולל IRS?' className='title-inputbox'></input>
                    </div>
                    <div className='add-question-body'>
                        <span className='body'>גוף השאלה</span>
                        <span className='body-description'>רשום את כל המידע שעשוי לשמש אדם אחר על מנת לענות</span>
                        <div className='body-border'>
                            <div className='wmd-button-bar'>
                                <div className='wmd-button-bar-row'>
                                    <FontAwesomeIcon className='wmd-button-bar-icon' icon={faRedoAlt} />
                                    <FontAwesomeIcon className='wmd-button-bar-icon' icon={faUndoAlt} />
                                    <FontAwesomeIcon className='wmd-button-bar-icon' icon={faQuoteRight} />
                                    <FontAwesomeIcon className='wmd-button-bar-icon' icon={faLink} />
                                    <FontAwesomeIcon className='wmd-button-bar-icon' icon={faListOl} />
                                </div>
                            </div>
                            <div className='help-tabs'>
                                <div className='help-tabs-bar'>
                                    <div className='help-tabs-row'>
                                        <span className='help-tab'>לינקים</span>
                                        <span className='help-tab'>תמונות</span>
                                        <span className='help-tab'>רשימות</span>
                                        <span className='help-tab'>ציטוטים</span>
                                    </div>
                                </div>
                            </div>
                            <div className='body-input'>
                                <input className='body-input-text'></input>
                            </div>
                        </div>
                    </div>
                    <div className='add-question-tags'>
                        <span className='title-text'>תגים</span>
                        <span className='title-description'>הוסף 5 תגים לכל היותר על מנת לתאר את נושאי השאלה</span>
                        <input placeholder='למשל javascript, python, reactjs' type="text" className='title-inputbox'></input>
                    </div>
                        <Button className={classes.root}>העלה שאלה</Button>
                </div>
            </div>
        </div>
    );
}