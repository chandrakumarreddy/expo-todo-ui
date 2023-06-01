import { TIME_OUT } from "./../constants/index";
import { ACCESS_TOKEN } from "@/constants";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

const axiosInstance = axios.create({
  baseURL: "http://localhost:1337",
  timeout: TIME_OUT,
});

axiosInstance.interceptors.request.use(async (req) => {
  try {
    const accessToken = await SecureStore.getItemAsync(ACCESS_TOKEN);
    req.headers.Authorization = accessToken;
    return req;
  } catch (error) {
    return req;
  }
});

export const saveToken = async (key: string, value: string) => {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (error) {
    throw error;
  }
};

export const fetcher = (url: string) =>
  axiosInstance.get(url).then((res) => res.data);

export default axiosInstance;
