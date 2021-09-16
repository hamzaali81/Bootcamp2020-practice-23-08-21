// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Alert from "@mui/material/Alert";
import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("red");
  // console.log(color);

  return (
    <div>
      <h1>Any place in your app!</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          console.log('hello',values.email.length);
          if(values.email.length <= 12){
            setColor('green')
          }
          
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field style={{ borderColor: `${color}` }} type="email" name="email" />
            <ErrorMessage
              name="email"
              component="div"
            
            />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default App;
