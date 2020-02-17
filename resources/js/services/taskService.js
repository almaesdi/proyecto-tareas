import axios from 'axios'

const TaskService = {
    getAllTasks,
}

function getAllTasks(){

    return axios.post("/tasks")
        .then(
            resp => {
                if(resp.data){
                    return resp.data
                }
                return null;
            })
        .catch(error => {
            //if (error.response.status == 422){
                return error.response.data;
            //}
        });

}

export default TaskService
