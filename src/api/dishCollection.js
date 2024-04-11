import { baseApi } from "./baseApi";

export const getDishes = () => {
    try {
        const response = baseApi.get()
        return response;
    } catch (error) {
        return error.message;
    }
};
