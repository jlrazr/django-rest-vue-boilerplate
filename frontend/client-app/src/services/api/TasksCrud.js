import axiosInstance from './axios'

export const postTask = async (endpointUrl, dataObj) => {
    const response = await axiosInstance.post(`${import.meta.env.VITE_APP_API_BASE}${endpointUrl}`, dataObj)
    return response
}

export const deleteTask = async (endpointUrl, taskId) => {
    const response = await axiosInstance.delete(`${import.meta.env.VITE_APP_API_BASE}${endpointUrl}`)
    return response
}