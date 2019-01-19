import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from "bootstrap-vue";
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";



Vue.use(BootstrapVue, VueRouter);

new Vue({
  el: '#app',
  render: h => h(App),
});

