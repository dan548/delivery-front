import Api from "../services/api";

export const getProductList = async () => {
    try {
        const response = await Api.get("/api/admin/products");
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const getProductById = async (id) => {
    try {
        const response = await Api.get(`/api/admin/products/${id}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const editProductById = async (id, patch) => {
    try {
        const response = await Api.patch(`/api/admin/products/${id}`, patch);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const deleteProductById = async (id) => {
    try {
        const response = await Api.delete(`/api/admin/products/${id}`);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const addNewProduct = async (request) => {
    try {
        const response = await Api.post('/api/admin/products/', request);
        return response;
    } catch (error) {
        console.error(error);
    }
};