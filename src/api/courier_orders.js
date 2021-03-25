import Api from "../services/api";

export const getMyOrderList = async () => {
    try {
        const response = await Api.get("/api/courier/orders/my");
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const getVacantOrderList = async () => {
    try {
        const response = await Api.get("/api/courier/orders");
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