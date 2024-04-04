import React from 'react'
import './Form2.scss'
import {Form, Field, Formik, ErrorMessage} from 'formik'
import {object, string} from 'yup'

const validationSchema = object({
    title: string().trim().required(),
    body: string().trim().required()
})

export default function Form2({onSubmit}) {
  return (
    <div className="Form2">
        <Formik
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        initialValues={{
            title: '',
            body: ''
        }}
        >
            <Form className='Form2__form'>
                <ErrorMessage>
                    {(err) => {
                        return (
                            <div className="errors">
                                {Object.keys(err).map(errField => {
                                    return <p>{err[errField]}</p>
                                })}
                            </div>
                        )
                    }}
                </ErrorMessage>
                <div>
                    <Field type='title' name='title' required className='Form2__title' placeholder='Name'/>
                </div>
                
                <div>
                    <Field component='textarea' type='body' name='body' required className='Form2__body' placeholder='Post'/>
                </div>

                <input type="submit" value='ADD' className='Form2__submit'/>
            </Form>
        </Formik>
    </div>
  )
}
