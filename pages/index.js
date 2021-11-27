import { useState } from 'react';
import axios from 'axios';
import Form from './Form.js'
import s from './form.module.css'
import For from './for'
import NavBar from './NavBar'
import Price from './price'

import Footer from './footer'
import Slider from './slider.js';
import { Card, CardGroup, Container, Col, Row, Image } from 'react-bootstrap'

function Home() {
	
  return   <div className={s.index_wrapper}>
<header> <NavBar/></header>
<CardGroup>
 
 <Card>

   <Card.Body>
<Slider/>

</Card.Body>
   
  </Card>
  
</CardGroup>
    <div>

    </div>
<footer>
<Footer/>
</footer>
  </div>
 
}

export default Home
