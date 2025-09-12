import React, { useState, useEffect } from 'react'
import { Signup } from '../Components/Signup';
import { useFormik } from "formik";
import { signUpSchema } from '../schemas/Schem';
const initialValue = {
  email: "",
  password: ""
}
const SignupScreen = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values)
    },
  });
  console.log("There is an error", errors)
  // Removed erroneous reference to Formik
  return (
    <>
      <Signup values={values} handleChange={handleChange}
        handleBlur={handleBlur} handleSubmit={handleSubmit}
        error={errors} touched={touched}
      />
    </>
  )
}
export default SignupScreen;

