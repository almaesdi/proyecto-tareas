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
            //commit('loginRequest', { username });
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
