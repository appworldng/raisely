import React from "react"
import { Formik, useField } from "formik"
import * as Yup from "yup"

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props)
}

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
    </>
  )
}

export default Home
