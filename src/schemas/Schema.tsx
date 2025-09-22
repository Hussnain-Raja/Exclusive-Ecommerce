import * as yup from "yup";
export const signUpSchema = yup.object({
    email: yup.string().email().required("Please enter your email"),
    password: yup.string().min(6).required("Please enter your password"),
    name: yup.string().required("Please enter your full name"),
    subject: yup.string().required("Please enter the subject"),
    message: yup.string().required("Please enter a message here")
})