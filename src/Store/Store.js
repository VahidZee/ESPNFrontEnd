import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        token: '',
        username: '',
        backEndUrl: ''

    },
    mutations: {

    },
    actions: {
        login(context, credentials) {
            axios.post(
                ''
            )
        }
    },
    getters: {
    }
})