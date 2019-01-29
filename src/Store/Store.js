import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        logged_in:false,
        token: '',
        username: '',
        first_name:'',
        last_name:'',
        profile_picture:'',
        backEndUrl: 'http://localhost:8000/'

    },
    mutations: {
        LOGGED_IN( state, token ) {
            state.token = token;
        }
    },
    actions: {
        login(context, credentials) {
            axios.post(
                this.state.backEndUrl + 'users/login' , credentials
            ).then(
                response => {
                    if( response.data.ok ) {
                        context.commit('LOGGED_IN',response.data.token);
                    }
                }
            )
        },
        getMe(context){

        }
    },
    getters: {
        NewsBackEndURL : state => {
            return state.backEndUrl + 'news/'
        }
    }
})