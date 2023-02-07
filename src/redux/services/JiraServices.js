import Axios from "axios"
import { DOMAIN } from "../../Domain"
import { ACCESS_TOKEN } from "../constants/LoginConstants"


export const JiraServices = {
    singinJira: (userLogin) => {
        return Axios({
            url: `${DOMAIN}/api/Users/signin`,
            method: 'POST',
            data: userLogin
        })
    },
    getProjectCategory: () => {
        return Axios({
            url: `${DOMAIN}/api/ProjectCategory`,
            method: 'GET'
        })

    },
    // createProject: (newProject) => {
    //     return Axios({
    //         url: 'https://casestudy.cyberlearn.vn/api/Project/createProject',
    //         method: 'POST',
    //         data: newProject
    //     })
    // }
    createProjectAuthentication: (newProject) => {
        return Axios({
            url: `${DOMAIN}/api/Project/createProjectAuthorize`,
            method: 'POST',
            data: newProject,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
            }
        })
    },

    getAllProject: () => {
        return Axios({
            url:`${DOMAIN}/api/Project/getAllProject`,
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
            }
        })
    },

    updateProject: (projectUpdate) => {
        return Axios({
            url: `${DOMAIN}/api/Project/updateProject?projectId=${projectUpdate.id}`,
            method: 'PUT',
            data: projectUpdate,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
            }
        })
    },

    deleteProject: (projectId) => {
        return Axios({
            url: `${DOMAIN}/api/Project/deleteProject?projectId=${projectId}`,
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
            }
        })
    },

    getUser: (keyWord) => {
        return Axios({
            url: `${DOMAIN}/api/Users/getUser?keyword=${keyWord}`,
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
            }
        })
    },
    assignUserProject: (userProject) => {
        return Axios({
            url: `${DOMAIN}/api/Project/assignUserProject`,
            method: 'POST',
            data: userProject,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
            }
        })
    },
    getProjectDetail: (projectId) => {
        return Axios({
            url: `${DOMAIN}/api/Project/getProjectDetail?id=${projectId}`,
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
            }
        })
    },
    getAllPriority: () => {
        return Axios({
            url: `${DOMAIN}/api/Priority/getAll`,
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
            }
        })
    },
    getAllTaskType: () => {
        return Axios({
            url: `${DOMAIN}/api/TaskType/getAll`,
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
            }
        })
    }
}