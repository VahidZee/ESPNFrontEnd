import Vue from 'vue'



//Plugins
import SuiVue from 'semantic-ui-vue';
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(SuiVue);

//Styles import
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Main Component
import {router} from "@/Routes/Router";
import {store} from "@/Store/Store"
import App from './App.vue'



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
