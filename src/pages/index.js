import React from "react"
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
          validationSchema={Yup.object({
            firstName: Yup.string()
              .min(2, "Must be at least 2 characters")
              .required("Required"),
            lastName: Yup.string()
              .min(2, "Must be at least 2 characters")
              .required("Required"),
            email: Yup.string()
              .email("Invalid e-mail address")
              .required("Required"),
            password: Yup.string()
              .min(6, "Must be at least 6 characters")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              resetForm()
              setSubmitting(false)
            }, 3000)
          }}
        >
          {props => (
            <Form>
              <h1 className="text-center mb-5">Sign Up</h1>
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
