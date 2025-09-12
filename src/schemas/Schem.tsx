import * as yup from "yup";
export const signUpSchema = yup.object({
    email: yup.string().email().required("Please enter your email"),
    password: yup.string().min(6).required("Please enter your password"),
})