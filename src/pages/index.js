import React, { useState } from "react"
import { Row, Col } from "react-bootstrap"
import { Formik, useField, Form } from "formik"
import * as Yup from "yup"
import axios from "axios"

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

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
}

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Must be at least 2 characters")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Must be at least 2 characters")
    .required("Required"),
  email: Yup.string().email("Invalid e-mail address").required("Required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .required("Required"),
})

const Home = () => {
  const [status, setStatus] = useState(
    "Enter in your sign up details and let's get you started"
  )

  return (
    <>
      <Layout>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            const data = {
              campaignUuid: "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
              data: values,
            }

            await axios
              .post("https://api.raisely.com/v3/signup", data)
              .then(res => {
                setStatus("Thank you for signing up with us...")
              })
              .catch(err => {
                setStatus("Something went wrong with your sign up process...")
              })

            setTimeout(() => {
              resetForm()
              setSubmitting(false)
            }, 3000)
          }}
        >
          {props => (
            <Form>
              <h1 className="text-center mb-3">Sign Up</h1>
              <p className="text-center mb-4">{status}</p>
              <Row className="mb-3">
                <Col sm={6}>
                  <TextField
                    label="First Name"
                    name="firstName"
                    type="text"
                    placeholder="John"
                  />
                </Col>
                <Col sm={6}>
                  <TextField
                    label="Last Name"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col sm={6}>
                  <TextField
                    label="E-mail Address"
                    name="email"
                    type="email"
                    placeholder="john@doe.com"
                  />
                </Col>
                <Col sm={6}>
                  <TextField
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="********"
                  />
                </Col>
              </Row>
              <button className="btn btn-primary" type="submit">
                {props.isSubmitting ? "Loading..." : "Sign Up"}
              </button>
            </Form>
          )}
        </Formik>
      </Layout>
    </>
  )
}

export default Home
