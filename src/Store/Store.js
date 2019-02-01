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
            console.log( token )
            let cred = {
                'token': state.token
            };
            axios.post(
                this.state.backEndUrl + 'users/getMe' , cred
            ).then(
                response => {
                    // console.log(response.data);
                    this.commit('CHANGE_USER_INFO', response.data)
                }
            )
        },
        LOGGED_OUT( state ) {
            state.token = '';
            state.logged_in = false;
            state.user_has_info = false;
            state.user = null;
        },
        CHANGE_USER_INFO( state, user ) {
            if( user.profile_picture )
                user.profile_picture = state.backEndUrl + user.profile_picture;
            state.user = user;
            state.user_has_info = true;
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
            console.log(this.state.token);
            let cred = {
                'token': this.state.token
            };
            axios.post(
                this.state.backEndUrl + 'users/getMe' , cred
            ).then(
                response => {
                    console.log(response.data);
                    this.commit('CHANGE_USER_INFO', response.data)
                }
            )
        }
    },
    getters: {
        //User State
        is_logged_in : state => {
            return state.logged_in
        },

        //URLS
        NewsBackEndURL : state => {
            return state.backEndUrl + 'news/'
        },
        CommentBackEndURL : state => {
            return state.backEndUrl + 'comment/'
        },
        BackEndURL :  state => {
            return state.backEndUrl
        },
        MediaBackEndURL : state => {
            return state.backEndUrl
        }
    }
})
