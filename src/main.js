import Vue from 'vue'



//Plugins
import SuiVue from 'semantic-ui-vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);
Vue.use(SuiVue);

//Styles import
import 'semantic-ui-css/semantic.min.css';

//Main Component
import {router} from "@/Routes/Router";
import App from './App.vue'



Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
