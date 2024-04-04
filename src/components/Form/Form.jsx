// import { ErrorMessage, Field, Form, Formik } from 'formik'
// import React from 'react'
// import { object, string } from 'yup'

// import './MainForm.scss'

// const initialValues = {
//     email: '',
//     username: '',
//     gender: '',
//     language: ''
// }

// const validationSchema = object({
//     email: string().email().lowercase().trim().required(),
//     username: string().min(3, "to short").max(18).required(),
//     gender: string().oneOf(["male", 'female']).required(),
//     language: string().required()
// })

// export default function MainForm({ onSubmit, currentUser }) {
//     console.log(currentUser)
//     return (
//         <div className='MainForm'>
//         <Formik
//             validationSchema={validationSchema}
//             onSubmit={onSubmit}
//             initialValues={Object.keys(currentUser).length > 0 ? currentUser : initialValues}
//         >
//             {
//             (formik) => {
//                 console.log(formik)
//                 return (
//                 <Form className='App__form' initialValues={currentUser?.id ? currentUser : initialValues}>
//                     <ErrorMessage>
//                     {(err) => {
//                         return (
//                         <div className='errors'>
//                             {Object.keys(err).map(errField => {
//                             return <p key={errField}>{err[errField]}</p>
//                             })}
//                         </div>
//                         )
//                     }}
//                     </ErrorMessage>
//                     <div>
//                     <Field type="email" name='email' required placeholder='email' />
//                     </div>
//                     <div>
//                     <Field type="text" name='username' required placeholder='username' />
//                     </div>
//                     <div>
//                     <Field as="select" name='language'>
//                         <option value="html">html</option>
//                         <option value="css">css</option>
//                         <option value="javascript">javascript</option>
//                         <option value="react">react</option>
//                     </Field>
//                     </div>

//                     <div>
//                     <label htmlFor="male">
//                         <Field type="radio" name="gender" id="male" value="male" /> M
//                         <Field type="radio" name="gender" id="female" value="female" /> F
//                     </label>
//                     </div>
//                     <div>
//                     <input type="submit" value="save user" />
//                     </div>
//                 </Form>
//                 )
//             }
//             }
//         </Formik>

//         </div >
//     )
// }

