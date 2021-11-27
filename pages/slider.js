import React from 'react'
import {Carousel } from 'react-bootstrap'
import Pen from './Pen.jpg'
import Chr from './Chr.jpg'

import 'bootstrap/dist/css/bootstrap.min.css'

 const Slider = (props) => {
return (
    <div className ='wrapper' >
<Carousel>
<Carousel.Item>

<img className = "d-block w-100"
 src = "https://sun9-21.userapi.com/impg/ixAS_ZOSmAlxtmOUVPKevsc1vwSFtfAJpy6ihw/tg9OjjUfzlI.jpg?size=1280x854&quality=96&sign=ee67c5a5de61994abad691b68056b195&type=album"

 alt = "hello"
/>
<Carousel.Caption>

<h3 className ='slider_h3'>Торты от валентины</h3>

</Carousel.Caption>


</Carousel.Item>
<Carousel.Item>

<img className = "d-block w-100"
 src = "https://sun9-83.userapi.com/impg/VBcnnTsEYsk7XoOvwl3yzL3fTvslKlHWBh6wvg/FfbzcXcGXHY.jpg?size=1280x853&quality=96&sign=fecd34974dfd0dc4a91bbb35af1bd644&type=album"
 alt = "hello"
/>
<Carousel.Caption>

<h3>ТОрты от валентины</h3>

</Carousel.Caption>


</Carousel.Item>

<Carousel.Item>

<img className = "d-block w-100"
 src = 'https://sun9-83.userapi.com/impg/VBcnnTsEYsk7XoOvwl3yzL3fTvslKlHWBh6wvg/FfbzcXcGXHY.jpg?size=1280x853&quality=96&sign=fecd34974dfd0dc4a91bbb35af1bd644&type=album'
 alt = "hello"
/>
<Carousel.Caption>

<h3>ТОрты от валентины</h3>

</Carousel.Caption>


</Carousel.Item>
</Carousel>
</div>

)

 }
export default Slider;