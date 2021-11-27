import React from 'react'
import ReactWhatsapp from 'react-whatsapp';

import inst from './inst.jpg'
import {NavLink} from "react-router-dom"
import s from './form.module.css'


const Whatsapp = () => {

return <div classname = {s.vk_wrapper}>
<div className =  {s.vk_grid} >
<img src = "https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN"/>
<ReactWhatsapp number="7-987-159-8778" message="Hello World!!!" />
</div>

</div>

}


export default  Whatsapp;