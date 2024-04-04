import React from 'react'
import {Form, Field, Formik, ErrorMessage} from 'formik'
import {object, string} from 'yup'
import './Form_hw.scss'


const validationSchema = object({
    title: string().trim().required(),
    body:string().trim().required(),
})

export default function Form_hw({onSubmit}) {
    return (
        <div className='Form_hw'>
        <Formik
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        initialValues={{
            title:'',
            body:'',
        }} 
        >
            <Form className='App__form'>
            <ErrorMessage>
                {(err) => {
                    return (
                        <div className='errors'>
                            {Object.keys(err).map(errField => {
                                return <p>{err[errField]}</p>
                            })}
                        </div>
                    )
                }}
            </ErrorMessage>
                <div>
                <Field type="title" name ='title'  required/>
                </div>
                <div>
                <Field component='textarea' type="body" name ='body'  required/>
                </div>
                <input type="submit" value = 'ADD'/>
            </Form>
        </Formik>
        </div>
    )
}
