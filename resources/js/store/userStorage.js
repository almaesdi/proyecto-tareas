import AuthService from 'services/authService.js'

export default {
	state: {
        status: '',
        errors: null,
        token: localStorage.getItem('token') || '',
        user : localStorage.getItem('user') || '',
    },
	getters : {
        isLoggedIn: state => !!state.user,
        authStatus: state => state.status,
        user: state => state.user,
        errors: state => state.errors,
    },
	actions: {
        getSession({ commit, dispatch }) {

            //commit('auth_request')

            commit('setLoading',true)

            AuthService.getSession()
                .then(response  => {
                    console.log(response)
                    if(response.success){
                        response = response.success
                        //const token = response.data.token
                        const user = response.data.user
                        //localStorage.setItem('token', token)
                        //localStorage.setItem('user', user)
                        commit('auth_success', {'user':user})
                    }else{
                        //commit('auth_error')
                        //localStorage.removeItem('token')
                        //localStorage.removeItem('user')
                    }
                    commit('setLoading',false)
                })
                .catch(error => {
                    //commit('auth_error')
                    //localStorage.removeItem('token')
                    //localStorage.removeItem('user')
                    commit('setLoading',false)
                })
        },
        login({ commit, dispatch }, { username, password }) {
            //Se inicia el request
            commit('auth_request')

            return new Promise((resolve, reject) => {
                AuthService.login(username, password)
                    .then(response  => {
                        if(response.success){
                            response = response.success
                            //const token = response.data.token
                            const user = response.data.user
                            //localStorage.setItem('token', token)
                            //localStorage.setItem('user', user)
                            commit('auth_success', {'user':user})
                            resolve(response)
                        }else{
                            commit('auth_error', {'errors':response.error})
                            //localStorage.removeItem('token')
                            //localStorage.removeItem('user')
                            reject(response)
                        }
                    })
                    .catch(error => {
                        console.log('Login Catch error');
                        commit('auth_error',{'errors':error})
                        //localStorage.removeItem('token')
                        //localStorage.removeItem('user')
                        reject(error)
                    });
            })
        },
	    /*register({commit}, user){
	    	return new Promise((resolve, reject) => {
	            commit('auth_request')
	            axios({url: 'http://localhost:3000/register', data: user, method: 'POST' })
	            .then(resp => {
	                const token = resp.data.token
	                const user = resp.data.user
	                localStorage.setItem('token', token)
	                // Add the following line:
	                axios.defaults.headers.common['Authorization'] = token
	                commit('auth_success', token, user)
	                resolve(resp)
	            })
	            .catch(err => {
	                commit('auth_error', err)
	                localStorage.removeItem('token')
	                reject(err)
	            })
	        })
	    },*/
        logout({commit, dispatch}){

            //localStorage.removeItem('token')
            //localStorage.removeItem('user')

            return new Promise((resolve, reject) => {
                AuthService.logout()
                    .then(response  => {

                        if(response.success){
                            commit('logout')
                            resolve(response)
                            /*response = response.success
                            const token = response.data.token
                            const user = response.data.user
                            localStorage.setItem('token', token)
                            localStorage.setItem('user', user)
                            commit('auth_success', {'token':token,'user':user})
                            resolve(response)*/
                        }else{
                            console.log(response.error);
                            /*commit('auth_error')
                            localStorage.removeItem('token')
                            localStorage.removeItem('user')*/
                            reject(response)
                        }
                    })
                    .catch(error => {
                        console.log('catch error: '.error);
                        /*commit('auth_error')
                        localStorage.removeItem('token')
                        localStorage.removeItem('user')
                        reject(error)*/
                    });
            })
	  	},
    },
	mutations: {
		auth_request(state){
            state.errors = null
	    	state.status = 'loading'
	  	},
	  	auth_success(state, { user }){
            state.errors = null
		    state.status = 'success'
		    //state.token = token
            state.user = user
	  	},
	  	auth_error(state, { errors }){
            console.log(errors);
            state.status = 'error'
            state.errors = errors.message
        },
	  	logout(state){
            state.status = '',
            state.user = ''
	    	//state.token = ''
	  	},
	}
}
