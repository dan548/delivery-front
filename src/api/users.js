import Api from "../services/api";

export const getUserList = async () => {
    try {
        const response = await Api.get("/api/admin/users");
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const getUserById = async (id) => {
    try {
        const response = await Api.get(`/api/admin/users/${id}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const editUserById = async (id, patch) => {
    try {
        const response = await Api.patch(`/api/admin/users/${id}`, patch);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const deleteUserById = async (id) => {
    try {
        const response = await Api.delete(`/api/admin/users/${id}`);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const addNewUser = async (request) => {
    try {
        const response = await Api.post('/api/admin/users/', request);
        return response;
    } catch (error) {
        console.error(error);
    }
};