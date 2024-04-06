import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { number, object, string } from "yup";
import "./App.scss";

export default function App() {

    const handleSubmit = () =>{
        
     }



  const initialValues = {
    firstName: "",
    lastName: "",
    streat: "",
    number: "",
    floor: "",
    postalCode: "",
    city: "",
    state: "",
    country: "",
  };
  const validationSchema = object({
    firstName: string().min(5).max(10).required(),
    lastName: string().min(5).max(15).required(),
    streat: string().min(5).max(15).required(),
    number: number().integer().positive().required(),
    floor: number().integer().positive().required(),
    postalCode: number().integer().positive().min(3).max(3).required(),
    city: string().min(5).max(15).required(),
    state: string().min(5).max(15).required(),
    country: string().oneOf(["Armenia", "USA", "Russia", "Japan", "China"]),
  });
  
  return (
    <div className="App">

      <h1 className="App__title">Addres form template</h1>
      <Formik
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
      <Form className="App__form">
        <h3 className="App__title">Name</h3>
        <div className="App__name">
          <Field type="text"  name="firstName" placeholder="First name"/>
          <Field type="text" name="lastName" placeholder="Last name"/>
        </div>
        <h3 className="App__title">Addres</h3>
        <div className="App__addres">
          <Field type="text" className="App__streat" name="streat" placeholder="Streat name"/>
          <Field type="text" className="App__number" name="number"placeholder="number " />
          <Field type="text" className="App__floor" name="floor" placeholder="Floor, unit"/>
          <Field type="text" className="App__postalCode" name="postalCode"placeholder="Postal code" />
          <Field type="text" className="App__city" name="city" placeholder="City"/>
          <Field type="text" className="App__state" name="state" placeholder="State"/>
          <Field as="select" className="App__country" name="country">
            <option value="Country">Country</option>
            <option value="Armenia">Armenia</option>
            <option value="USA">USA</option>
            <option value="Russia">Russia</option>
            <option value="Japan">Japan</option>
            <option value="China">China</option>
          </Field>
        </div>
        <input type="submit" className="App__submit" value="Submit &#10141;"/>
      </Form>
      </Formik>
    </div>
  );
}
