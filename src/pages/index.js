import React from "react"
import { Formik } from "formik"
import * as Yup from "yup"

const Home = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
      ></Formik>
    </>
  )
}

export default Home
