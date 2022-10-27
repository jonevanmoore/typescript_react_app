import { Button, TextField } from '@material-ui/core';
import {Formik, Form} from 'formik'
import * as React from 'react'
import '@fontsource/roboto/300.css';


interface Values {
    firstName: string;
    lastName: string;
    email: string;
}

interface Props {
    onSubmit: (values: Values) => void;
}

const MyForm:React.FC<Props> = ({onSubmit}) => {
  return (
    <div>
        <Formik initialValues={{firstName: '', lastName: '', email: ''}} 
        onSubmit={values => {
            onSubmit(values)
        }}
        >{
            ({values, handleChange, handleBlur}) => (
                    <Form>
                        <TextField 
                        placeholder='first name'
                        name="firstName" 
                        value={values.firstName} 
                        onChange={handleChange} 
                        onBlur={handleBlur}
                        />
                        <br></br>
                        <TextField 
                        placeholder='last name'
                        name="lastName" 
                        value={values.lastName} 
                        onChange={handleChange} 
                        onBlur={handleBlur}
                        />
                        <br></br>
                        <TextField 
                        placeholder='email'
                        name="email" 
                        value={values.email} 
                        onChange={handleChange} 
                        onBlur={handleBlur}
                        />
                        <br></br>
                        <Button type='submit'>SubmiT</Button>
                    </Form>
                )
            }
        </Formik>
    </div>
  )
}

export default MyForm
