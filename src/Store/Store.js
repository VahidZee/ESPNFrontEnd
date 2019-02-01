import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        token: '',
        username: '',
        backEndUrl: 'http://localhost:8000/'
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
        NewsBackEndURL : state => {
            return state.backEndUrl + 'news/'
        }
    }
})
