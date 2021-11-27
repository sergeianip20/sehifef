

import React from 'react'
import  'bootstrap/dist/css/bootstrap.min.css';
import Form from './Form'

import  {Card, Button} from 'react-bootstrap'

const Wedding = (props) => {

const [order, setorder] = React.useState(false)

let truesetorder = (index) => {

  
}




return <div className = 'users_grid'>
  <div className = '.users_item' >
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.imageUrl} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
      
    </Card.Text>
    
    

    <div><Form/></div>
   
  </Card.Body>
</Card>
</div  >

</div>
    




}

export default Wedding ;