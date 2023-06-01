import { IUser } from "@/types";
import axiosInstance, { saveToken } from "./config";
import { ACCESS_TOKEN } from "@/constants";

export const registerUser = async (data: IUser) => {
  try {
    const response = await axiosInstance.post("/api/v1/user/create", data);
    const token = response.data.token;
    axiosInstance.defaults.headers["Authorization"] = token;
    await saveToken(ACCESS_TOKEN, token);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const loginUser = async (data: Omit<IUser, "name">) => {
  try {
    const response = await axiosInstance.post("/api/v1/user/login", data);
    const token = response.data.token;
    axiosInstance.defaults.headers["Authorization"] = token;
    await saveToken(ACCESS_TOKEN, token);
    return response.data.user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
