import React, {useState}from 'react'
import axios from 'axios';
import {Button, Modal } from 'react-bootstrap';
import  'bootstrap/dist/css/bootstrap.min.css';
import s from './form.module.css'
import Formik from './formik'
import Formfinish  from './formfinish'


const Form = () => {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return ( <div>

<button type ='button' onClick={handleShow} className={s.button_css}>Заказать</button>

     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Заказ обратный звонок</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<Formfinish />
    </Modal.Body>
    
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>)





}
export default  Form