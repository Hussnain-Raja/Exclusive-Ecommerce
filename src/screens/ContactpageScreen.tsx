import React from 'react'
import Contactpage from '../Components/Contactpage';
import { useFormik } from 'formik';
import { signUpSchema } from '../schemas/Schema';


const initialValue = {
    email: "",
    name: "",
    message: "",
    subject: ""
}

const ContactpageScreen = () => {

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: initialValue,
            validationSchema: signUpSchema,
            onSubmit: (values) => {
                localStorage.setItem("name",values.name);
                localStorage.setItem("email",values.email);
                localStorage.setItem("subject",values.subject);
                localStorage.setItem("message",values.message);
                // if (values.name && values.message && values.subject) {

                // } else {

                // }
                // // console.log(values);
            },
        });

    return (
        <>
            <Contactpage values={values} errors={errors} touched={touched} handleBlur={handleBlur}
                handleChange={handleChange} handleSubmit={handleSubmit}
            />
        </>
    )
}

export default ContactpageScreen;