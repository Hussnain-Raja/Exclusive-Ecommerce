import { Category, Iproducts, userList } from "../@types/ApiResponses";
import { ApiNames } from "../constants/ApiNames";
import { apiRequest, getRequest, postRequest } from "./NetworkService";

export const generateTokenService = async (requestData: {
  email: string;
  password: string;
}) => {
  let { data }: { data: string } = await apiRequest(
    ApiNames.generateToken,
    "POST",
    requestData
  );
  return data;
};

export const getCategroyService = async () => {
  let endPoint = ApiNames.categories;
  let { data }: { data: Category[] } = await apiRequest(endPoint, "GET");
  return data;
};

export const getProductService = async () => {
  let endPoint = ApiNames.products;
  let { data }: { data: Iproducts[] } = await apiRequest(endPoint, "GET");
  return data;
};

export const getUserService = async () => {
  let endPoint = ApiNames.users;
  let { data }: { data: userList } = await apiRequest(endPoint, "Get");
  return data;
};
