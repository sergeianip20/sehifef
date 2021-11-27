import React , {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';












const SignupSchema = Yup.object().shape({
    message: Yup.string()
      .min(2, 'Too Short!')
      .max(15, 'Too Long!')
      .required('Required'),
  });


 


const Valid = (props) => {
    

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

    const submit = () => {
        (values, { setSubmitting }) => { 
           
        }
    
    
    }
    


 return <div>

    <Formik
      initialValues={{ phone: '', name: '', message: '' }}
      validate={values => {
        const errors = {};
        if (!values.phone) {
          errors.phone = 'Required';
        } else if (
            !/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/i.test(values.phone)
        ) {
          errors.phone = 'Введите номер пожалуйста';
        }
        return errors;
      }}

     
      
      validationSchema={SignupSchema}
      onSubmit={submit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="phone" name="phone" />
          <ErrorMessage name="phone" component="div" />
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
          <Field type ="text" name="message" />
           
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
};

export default Valid;
