import React from "react"
import { Row, Col } from "react-bootstrap"
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
        >
          <Form>
            <h1 className="text-center mb-5">Sign Up</h1>
            <Row className="mb-3">
              <Col>
                <TextField
                  label="First Name"
                  name="firstName"
                  type="text"
                  placeholder="John"
                />
              </Col>
              <Col>
                <TextField
                  label="Last Name"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <TextField
                  label="E-mail Address"
                  name="email"
                  type="email"
                  placeholder="chigozieorunta@yahoo.com"
                />
              </Col>
              <Col>
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="********"
                />
              </Col>
            </Row>
            <button className="btn btn-primary" type="submit">
              Sign Up
            </button>
          </Form>
        </Formik>
      </Layout>
    </>
  )
}

export default Home
