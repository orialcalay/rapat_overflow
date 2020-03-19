 import React, { useState } from 'react';
import './RapatModal.css';
import {Modal, Button, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';


export default function RapatModal({handleClick, title, body}){

  
  return (
    <div className="modal">
      <Modal isOpen='true'>
        <ModalBody className='modal-body'>
        {title}
        <span className="span-title"> {body} </span>
        <ModalFooter>
          <Button className="OKButton" onClick={handleClick}>OK</Button>
          <Button className="cancelButton" onClick={handleClick}> Cancel </Button>
        </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
