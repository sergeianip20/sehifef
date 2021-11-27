import React, {useState}from 'react'
import axios from 'axios'
import s from './form.module.css'



const For = ( ) => {

const [value, setvalue] = useState(initialValue)
const [isDirty, setDirty]= useState(false)



const onChange = () => {

    setvalue(e.target.value)
}

const onBlur = ( ) => {

setDirty(true)

}
	
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	
  return <div className={s.index_wrapper}>
<p>Имя</p>
	<p>{name}</p>
	<input type='text' value={name} onChange={event => setName(event.target.value)}/>
	<p>Телефон</p>
	<p>{phone}</p>
	<input type='text' value={phone} onChange={event => setPhone(event.target.value)}/>
	<p>E-mail</p>
	<p>{email}</p>
	<input type='text' value={email} onChange={event => setEmail(event.target.value)}/>
	<p>Сообщение</p>
	<p>{message}</p>
	<input type='text' value={message} onChange={event => setMessage(event.target.value)}/>
	<button type='button' onClick={sendForm}>Отправить</button>

  </div>
}
export default For;