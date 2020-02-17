import TaskService from 'services/taskService.js'

export default {
	state: {
        status: '',
        errors: null,
        tasks: null,
    },
    getters: {
        getTasks: state => state.tasks,
    },
    actions: {
        fetchAllTasks({ commit, dispatch }) {
            commit('setLoading',true);

            return new Promise((resolve, reject) => {
                TaskService.getAllTasks()
                    .then (response => {
                        commit('setTasks', response);
                        resolve(response)
                    })
                    .catch (error=> {
                        reject(response)
                    })
                    .finally (() => {
                        commit('setLoading',false)
                    })
            })
        }
    },
    mutations: {
		setTasks(state, tasks){
            state.tasks = tasks;
	  	},
    },
}

