import { ApiNames } from "../constants/ApiNames";
import { postRequest } from "./NetworkService";

export const generateTokenService = async (requestData:{
    email: string;
    password:string;

}) => {
    let {data} : {data:string} = await postRequest(
        ApiNames.generateToken,
        requestData
    );
    return data;
}