import Vue from "vue";
import TestComponent from './components/TestComponent.vue';

Vue.component('test-component', TestComponent);

const app = new Vue({
    el: '#app'
});