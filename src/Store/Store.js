import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        logged_in:false,
        user_has_info:false,
        token: '',
        user: null,
        backEndUrl: 'http://localhost:8000/'

    },
    mutations: {
        LOGGED_IN( state, token ) {
            state.token = token;
            state.logged_in = true;
            store.dispatch('getMe');
        },
        CHANGE_USER_INFO( state, user ) {
            if( user.profile_picture )
                user.profile_picture = state.backEndUrl + user.profile_picture;
            state.user = user;

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
            let cred = {
               'token': context.state.token
            };
            axios.post(
                this.state.backEndUrl + 'users/getMe' , cred
            ).then(
                response => {
                    this.commit('CHANGE_USER_INFO', response.data)
                }
            )
        }
    },
    getters: {
        NewsBackEndURL : state => {
            return state.backEndUrl + 'news/'
        }
    }
})