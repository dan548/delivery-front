import Api from "../services/api";

export const getOrderList = async () => {
    try {
        const response = await Api.get("/api/customer/orders");
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const getOrderById = async (id) => {
    try {
        const response = await Api.get(`/api/customer/orders/${id}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const addNewProduct = async (request) => {
    try {
        const response = await Api.post('/api/customer/orders/', request);
        return response;
    } catch (error) {
        console.error(error);
    }
};