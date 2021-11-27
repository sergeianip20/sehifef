import React from 'react';
import { Card, CardGroup, Container, Col, Row, Image } from 'react-bootstrap'
import vk from './vk.png'
import inst from './inst.jpg'
import s from './form.module.css'
import VK from './vk'
import INST from './inst'
import Whatsapp from './Whatsapp'
import ReactWhatsapp from 'react-whatsapp';

const Footer =() => {




return <div>
<CardGroup>
 
  <Card>
 
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
        
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <div  className = {s.VK_GRid}>
    <div className = {s.vk_items}>
   
   <a  href="https://vk.com/im?peers=596368881&sel=63421614">
   <VK/>
</a>
   </div>
  <div className = {s.vk_items}>
    <a href ="https://www.instagram.com/vp.cake/">
   <INST/>
   </a>
    </div>
    <div className = {s.vk_items}>
      <div className = {s.Whatsapp}>
        
    <ReactWhatsapp    className = {s.Whatsapp} number="7-987-159-8778" message="Hello World!!!" />
    </div>
    </div>
    </div>
    </Card.Footer>
  </Card>
  
</CardGroup>
</div>
}
export default Footer