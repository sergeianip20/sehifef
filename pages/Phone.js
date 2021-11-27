
import React , {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';



const PHONE = () => {
    <div>

    <Formik
      initialValues={ {phone: ''}}
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
      >
      {({ isSubmitting }) => (
        <Form>
<Field type="phone" name="phone" />
<ErrorMessage name="phone" component="div" />
</Form>
      )}
    </Formik> 
</div>
}
export default PHONE;