import React from "react"
import { Formik, useField, Form } from "formik"
import * as Yup from "yup"

import Layout from "../components/layout"

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <div className="form-group">
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="form-control" {...field} {...props} />
        {meta.touched && meta.error ? (
          <small className="form-text text-danger">{meta.error}</small>
        ) : null}
      </div>
    </>
  )
}

const Home = () => {
  return (
    <>
      <Layout>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          validationScheme={Yup.object({
            firstName: Yup.string()
              .min(2, "Must be at least 2 characters")
              .required("Required"),
            lastName: Yup.string()
              .min(2, "Must be at least 2 characters")
              .required("Required"),
            email: Yup.string()
              .email("Invalid e-mail address")
              .required("Required"),
            Password: Yup.string()
              .min(6, "Must be at least 6 characters")
              .required("Required"),
          })}
        ></Formik>
      </Layout>
    </>
  )
}

export default Home
