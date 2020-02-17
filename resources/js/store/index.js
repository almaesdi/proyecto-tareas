import Vue from 'vue';
import Vuex from 'vuex';

import userStorage  from './userStorage';
import taskStorage  from './taskStorage';


Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        userStorage,
        taskStorage,
    },
    /*Variable y funciones globales entre todas las storage*/
    state: {
        loading: false,
    },
    getters : {
        isLoading: state => state.loading,
    },
	mutations: {
		setLoading(state, loadingState){
            state.loading = loadingState;
        },
    }

});

export default store
