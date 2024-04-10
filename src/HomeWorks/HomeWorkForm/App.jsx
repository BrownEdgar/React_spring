import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { object, string, number } from "yup";
import "./App.scss";

export default function App() {
  const initialValues = {
    name: "",
    lastname: "",
    streetname: "",
    number: "",
    floor: "",
    postalcode: "",
    city: "",
    state: "",
    country: "country",
  };

  const validationSchema = object({
    name: string().required(),
    lastname: string().required(),
    streetname: string().required(),
    number: number().required(),
    floor: number(),
    postalcode: number().required(),
    city: string().required(),
    state: string().required(),
  });

  return (
    <div className="App">
      <h1>Address Form</h1>
      <Formik validationSchema={validationSchema} initialValues={initialValues}>
        <Form>
          <h2>Name</h2>
          <div className="App__userName">
            <Field name="name" type="text" placeholder="First name" />
            <Field name="lastname" type="text" placeholder="Last name" />
          </div>
          <h2>Address</h2>
          <div className="App__address">
            <Field name="streetname" type="text" placeholder="Street name" />
            <div>
              <Field name="number" type="text" placeholder="Number" />
              <Field name="floor" type="text" placeholder="Floor,unit,..." />
            </div>
            <Field name="postalcode" type="text" placeholder="Postal code" />
            <Field name="city" type="text" placeholder="City" />
            <Field name="state" type="text" placeholder="State" />
            <Field as="select" name="country">
              <option value="country" disabled>
                Country
              </option>
              <option value="Armenia">Armenia</option>
              <option value="Russia">Russia</option>
              <option value="USA">USA</option>
              <option value="Germany">Germany</option>
            </Field>
          </div>
          <button className="App__submit" type="submit">
            Submit <i className="bi bi-arrow-right"></i>
          </button>
          <ErrorMessage>
            {(err) => {
              return (
                <div className="errors">
                  {Object.keys(err).map((item) => {
                    return <p key={item}>{err[item]}</p>;
                  })}
                </div>
              );
            }}
          </ErrorMessage>
        </Form>
      </Formik>
    </div>
  );
}
