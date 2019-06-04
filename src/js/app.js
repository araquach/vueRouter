import Vue from "vue";
import VueRouter from 'vue-router';
import TestComponent from './components/TestComponent.vue';

Vue.use(VueRouter)

Vue.component('test-component', TestComponent);

const app = new Vue({
    el: '#app'
});