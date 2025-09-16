import React, { useState, useEffect } from 'react'
import { Signup } from '../Components/Signup';
import { useFormik } from "formik";
import { signUpSchema } from '../schemas/Schem';
import { useNavigate } from 'react-router';
import { email as validEmail,password as validPassword  } from '../utils/Config';
const initialValue = {
  email: "",
  password: ""
}
interface Props {
  setIslogin: React.Dispatch<React.SetStateAction<boolean>>;
}
const SignupScreen = (props: Props) => {
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValue,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        if (values.email === validEmail && values.password === validPassword) {
          localStorage.setItem("authToken", "dummy-token");
          const loginState = localStorage.setItem("isLogin", "true");
          props.setIslogin(true);
          navigate("/");
        } else {
          alert("Please enter credentials");
        }

        console.log(values);
      },
    });
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

