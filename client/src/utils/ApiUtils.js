import { json } from "react-router-dom";
import { baseUrl } from "../Constant"
import axios from "axios";

export const getAllBanner = () => {
    const url = `${baseUrl}/api/banner`;
    const response = axios.get(url, {
        "Content-Type": "application/json"
    })
    return response; // response is promise
}

export const signup = (data) => {
    const url = `${baseUrl}/api/auth/register`;
    const response = axios.post(url, data, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response;
}