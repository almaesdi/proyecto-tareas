import AuthService from 'services/authService.js'

export default {

	state: {
        loggingIn: false,
        loginError: null,
        loginSuccessful: false
	},
	getters: {

	},
	actions: {
        login({ dispatch, commit }, { username, password }) {

            commit('loginStart');

            AuthService.login(username, password)
                .then(success => {

                    if(success){
                        commit('loginStop', null)
                    }else{
                        commit('loginStop', "Credenciales no validas")
                    }

                })
                .catch(error => {
                    commit('loginStop', error.response.data.error)
                });
        },
        register({ dispatch, commit }, { name,username, password }) {

            //commit('loginStart');

            AuthService.register(name,username, password)
                .then(success => {

                    if(success){
                        console.log(success);
                    }else{
                        console.log("error");
                    }

                })
                .catch(error => {
                    //commit('loginStop', error.response.data.error)
                    console.log(error.response);
                });
        },
    },
	mutations: {
        loginStart: state => state.loggingIn = true,
        loginStop: (state, errorMessage) => {
            state.loggingIn = false;
            state.loginError = errorMessage;
            state.loginSuccessful = !errorMessage;
        }
	}
}
