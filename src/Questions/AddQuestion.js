import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListOl } from '@fortawesome/free-solid-svg-icons';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@material-ui/core';
import { makeStyles, rgbToHex } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import './AddQuestion.css';
import RapatModal from '../Common/RapatModal';
import { useHistory } from "react-router-dom";
import CustomizedHook from './AddTags';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';


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

const inputUseStyles = makeStyles({
    root: {
        width: 696,
    },
  });


export default function AddQuestion(){
    
    const classes = useStyles();
    const inputClasses = inputUseStyles();

    let history = useHistory();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    //const [tags, setTags] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    const [tags, setTags] = useState([]);

    function handleModalOK(){
        setModalOpen(false);
        history.push("/questions");
    }

    function onUploadQuestion(){
        var tagsArray = tags.split(',');
        axios({
            method: 'post',
            url: 'http://167.71.32.57:5000/addQuestion',
            data: {
              title: title,
              body: body,
              tags: tagsArray
            }
        })
        .then(function (response) {
            if(response.data == 'True'){
                setModalOpen(true);
            }
        });
    }


    return(
        <div className='add-question-main'>
            <div>
                <span className='note'>דע לך : אין הביישן למד!</span>
            </div>
            <div className='add-question-body-main'>
                <div className='add-question-container'>
                    <div className='add-question-title'>
                        <span className='title-description'>ציין במדויק ובאופן ממוקד מהי שאלתך - דמיין שאתה שואל שאלה לאדם אחר</span>
                        <span className='title-text'>כותרת</span>
                        <input value={title} onInput={e => setTitle(e.target.value)} type="text" placeholder='למשל, כיצד ניתן לחולל קבצי h באמצעות מחולל IRS?' className='title-inputbox'></input>
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
                                {/* <input value={body} onInput={e => setBody(e.target.value)} className='body-input-text'></input> */}
                                <Input
                                    className={inputClasses.root}
                                    id="standard-textarea"
                                    label="Multiline Placeholder"
                                    multiline
                                />
                            </div>
                        </div>
                    </div>
                    <div className='add-question-tags'>
                        <span className='title-text'>תגים</span>
                        <span className='title-description'>הוסף 5 תגים לכל היותר על מנת לתאר את נושאי השאלה</span>
                        <input value={tags} onInput={e => setTags(e.target.value)} placeholder='למשל javascript, python, reactjs' type="text" className='title-inputbox' />
                        {/* <CustomizedHook optionalTags={[
                                                        { title: 'reactjs', year: 1994 },
                                                        { title: 'javascript', year: 1972 },
                                                        { title: 'python', year: 1974 },
                                                        { title: 'python3', year: 2008 },
                                                        { title: 'C#', year: 1957 },
                                                        { title: "C++", year: 1993 },
                                                        { title: 'ipv4', year: 1994 },
                                                        { title: '.Net core', year: 1994 },
                                                        { title: 'ipv6', year: 2003 },
                                                        ]}/> */}
                    </div>
                    <Button onClick={onUploadQuestion} className={classes.root}>העלה שאלה</Button>
                    <RapatModal text={title} modalOpen={modalOpen} handleClose={handleModalOK} />
                </div>
            </div>
        </div>
    );
}