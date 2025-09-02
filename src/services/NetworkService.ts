import axios from "axios";
export const baseUrl = "https://api.escuelajs.co/api/v1/";

export const getRequest = async (endPoint: string) => {
    try {
        const response = await axios({
            url: `${baseUrl}${endPoint}`,
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Connection: "close",
                Authorization: "Bearer " + global.authToken,
            },
        });
        return response;
    } catch (error: any) {
        if (error.response && error.response.status === 403) {
            // logout();
        }
        throw error;
    }

};

export const postRequest = async (endPoint: string, data: {}) => {
    try {
        const response = await axios({
            url: `${baseUrl}${endPoint}`,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Connection: "close",
                Authorization: "Bearer " + global.authToken,
            },
            data: data,
            // timeout: requestTimeout,
        });

        return response;
    } catch (error: any) {
        if (error.response && error.response.status === 403) {
            // logout();
        }
        throw error;
    }
};

