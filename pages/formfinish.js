import React, {useState, useEffect}from 'react'
import axios from 'axios';
import s from './form.module.css'
import Valid from './valid';
import * as Yup from 'yup'



const Formfinish  = () => {

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
        const [nameDirty, setNameDirty] = useState(false)
        const [phoneDirty, setPhoneDirty] = useState(false)
        const [messageDirty, setmessageDirty] = useState(false)
        const [nameError, setnameError] = useState('введите имя')
        const [phoneError, setphoneError] = useState('введите номер')
        const [messageError, setmessageError] = useState('напишите пожелания')
        const [formValid, setFormValid] = useState(false)
        
        useEffect( () => {
        if(nameError || phoneError || messageError) {
        setFormValid(false)
        }else {
        setFormValid(true)
        }
        
        
        [nameError, phoneError, messageError]})
        
        const phoneHandeler = (e) => {
        setPhone(e.target.value)
        const re =/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
        if(!re.test(String(e.target.value).toLowerCase())){
        setphoneError('введите номер')
        }else {
        setphoneError("")
        }
        }
        
        const nameHandler = (e) => {
        setName(e.target.value)
        if(e.target.value.length < 3 || e.target.value.length > 8 ) {
        setnameError('введите нужное значение ')
        if(!e.target.value){
        setnameError('введите нужное значение ')
        }
        }else {
        setnameError('')
        }
        }
        const messageHandler = (e) => {
        setMessage(e.target.value)
        if(e.target.value.length < 6
        || e.target.value.length > 15 ) {
        setmessageError('введите нужное значение ')
        if(!e.target.value){
        setmessageError('введите нужное значение ')
        }
        }else {
        setmessageError('')
        }
        }
        
        const blueHadler =(e)=> {
        switch(e.target.name){
        case 'name':
        setNameDirty(true)
        break
        case 'phone':
        setPhoneDirty(true)
        break
        case 'message':
        setmessageDirty(true)
        break  
        }  }
        

return (<div className={s.mod}>
 
{(phoneDirty && phoneError) && <div style={{color: "red"}}>{phoneError}</div>}
<input  onChange={ e => phoneHandeler(e)} value={phone} onBlur={e => {blueHadler(e)}} type="text" name="phone"
placeholder="напишите номер"/>
<p></p>
{(messageDirty && messageError) && <div style={{color: "red"}}>{messageError}</div>}

<input onChange ={ e => messageHandler(e)} value ={message} onBlur ={ e => {blueHadler(e)}} type="text"
name="message"
placeholder=" напиши пожелания"
/>
<p></p>
{(nameDirty && nameError) && <div style={{color: "red"}}>{nameError}</div>}
<input onChange ={e => nameHandler(e)} value ={name} onBlur={e => {blueHadler(e)}} type="text" name="name"
placeholder="напишите имя"/>
<p></p>
<div> <span className ={s.chex}></span> я соглашаюсь на обработку моих персональных данных</div>
<p></p>
<button disabled={!formValid}  onClick={sendForm} > отправить </button>




    </div>

)


}
export default Formfinish ;
