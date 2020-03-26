import Vue from 'vue';
import VuelazyLoad from './plugins/lazyload';
import loading from './assets/loading.jpg'
import App from './App.vue'

Vue.use(VuelazyLoad,{
    preLoad: 1.3, // 可见区域的1.3倍
    loading, // loading图
}); 
let vm = new Vue({
    el:'#app',
    render:h=>h(App)
})