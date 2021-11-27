import React from 'react';
import { Card, CardGroup, Container, Col, Row, Image } from 'react-bootstrap'
import s from './form.module.css'
import Wedding from './wedding'
import  * as axios from 'axios'
import Slider from './slider'
import NavBar from './NavBar'
import Footer from './footer'
import Mycontainer from './MYcontainer'
import Head from 'next/head'

const Price = () => {

  const [tort, settort] = React.useState([]);

  React.useEffect(()=> {
  
    axios.get('http://localhost:3000/birthday.json').then(({data}) =>{
  settort(data.tort)
  
    })
  }, []);

return <>


<Head>
<title>Главная страница</title>
</Head>
  <header><NavBar/></header>
<CardGroup>
 
  <Card>
 
    <Card.Body>
<Slider/>


    <h3>Торт</h3>
      <Card.Text>
        <div className ={s.users_grid}>    
        {

        tort.map( u => <div className = 'users_item'> <Wedding key ={u.id} {...u}/> </div>)
        }
        
      </div>  
      </Card.Text>
    </Card.Body>
   
  </Card>
  
</CardGroup>
<footer>
  <Footer/>
</footer>
</>
}

export default Price;