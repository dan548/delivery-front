import Api from "../services/api";

export const getMyOrderList = async (requestParams) => {
    try {
        const response = await Api.get("/api/courier/orders/my", requestParams);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const getVacantOrderList = async (requestParams) => {
    try {
        const response = await Api.get("/api/courier/orders", requestParams);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const getOrderById = async (id) => {
    try {
        const response = await Api.get(`/api/courier/orders/${id}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const editOrderById = async (id, patch) => {
    try {
        const response = await Api.patch(`/api/courier/orders/${id}`, patch);
        return response;
    } catch (error) {
        console.error(error);
    }
};