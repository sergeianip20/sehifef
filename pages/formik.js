import React, {useState}from 'react'
import axios from 'axios';
import s from './form.module.css'
import Valid from './valid';
import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
    message: Yup.string()
      .min(5, 'Too Short!')
      .max(15, 'Too Long!')
      .required('Required'),
  });

const Formik = () => {

async function sendForm() {
	
		try {
			
			await axios.post('http://localhost:3000/api/send-request', {
				name, phone, message
			});
			
			setName('');
			setPhone('');
			setEmail('');
			
			
		} catch (error) {
			console.log('Sending error', error);
		}
	
}
    const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
		const [message, setMessage] = useState('');
		
const SETsetname = (value) => {
setName(value)

}
const SETsetPhone = (value) => {
	setPhone(value)
	
	}
	const SETsetmessage = (value) => {
		setEmail(value)
		
		}
		const setSendForm = () => {
         sendForm()

		}

return (<div className={s.mod}>
        <p>Имя</p>
	
	<input type='text' value={name} onChange={event => setName(event.target.value)}/>
	<p>Телефон</p>

	<input type='text' value={phone} onChange={event => setPhone(event.target.value)}/>
	<p>сообщение</p>

	<input type='text' value={message} onChange={event => setMessage(event.target.value)}/>
	
	
	<button type='button' onClick={sendForm}>Отправить</button>

    </div>

)


}
export default Formik;
