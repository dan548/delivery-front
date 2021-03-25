import Api from "../services/api";

export const getOrderList = async () => {
    try {
        const response = await Api.get("/api/admin/orders");
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const getOrderById = async (id) => {
    try {
        const response = await Api.get(`/api/admin/orders/${id}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const editOrderById = async (id, patch) => {
    try {
        const response = await Api.patch(`/api/admin/orders/${id}`, patch);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const deleteOrderById = async (id) => {
    try {
        const response = await Api.delete(`/api/admin/orders/${id}`);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const addNewProduct = async (request) => {
    try {
        const response = await Api.post('/api/admin/orders/', request);
        return response;
    } catch (error) {
        console.error(error);
    }
};