import Api from "../services/api";

export const login = async (request) => {
    try {
        const response = await Api.post("/auth", request);
        return response.token;
    } catch (error) {
        console.error(error);
    }
};

export const signup = async (request) => {
    try {
        return await Api.post("/register", request);
    } catch (error) {
        console.error(error);
    }
};