import {axiosService} from "./axiosService";

const userServices = {
    getAllUsers: () => axiosService.get('/users'),
    // getById: (id) => axiosService.get(`/users/${id}`)
    getAllPosts: (id) => axiosService.get(`/users/${id}/posts`)
}
export {userServices}

// import {axiosService} from "./axiosService";
//
// const userServices = {
//     getAll: () => axiosService.get('/users'),
//     getById: (id) => axiosService.get(`/users/${id}`)
// }
//
// export {
//     userServices
// }