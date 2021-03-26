import Api from "../services/api";

export const getWhoAmI = async () => {
    try {
        const response = await Api.get("/whoami");
        return response;
    } catch (error) {
        console.error(error.response);
        window.location.href = "http://localhost:5000/login"
    }
};