import React from 'react';
import { Card, CardGroup, Container, Col, Row, Image } from 'react-bootstrap'
import s from './form.module.css'
import Wedding from './wedding'
import  * as axios from 'axios'
import Slider from './slider'
import NavBar from './NavBar'
import Footer from './footer'


const Price2 = () => {

  const [tort, settort] = React.useState([]);

  React.useEffect(()=> {
  
    axios.get('http://localhost:3000/baby.json').then(({data}) =>{
  settort(data.tort)
  
    })
  }, []);

return <div>

  <header><NavBar/></header>
<CardGroup>
 
  <Card>
 
    <Card.Body>
<Slider/>


    <h3>Торт</h3>
      <Card.Text>
        <div className ={s.users_grid}>    
        {

        tort.map( u => <div key = {u.id} className = 'users_item'> <Wedding key ={u.id} {...u}/> </div>)
        }
        
      </div>  
      </Card.Text>
    </Card.Body>
   
  </Card>
  
</CardGroup>
<footer>
  <Footer/>
</footer>
</div>
}

export default Price2;