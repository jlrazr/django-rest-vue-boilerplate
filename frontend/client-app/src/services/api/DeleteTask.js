import axiosInstance from './axios'

export default {
    methods: {
        async sendDeleteRequest(endpointUrl, dataObj) {
            const response = await axiosInstance.delete(endpointUrl, dataObj)
            return response
        }
    }
}
