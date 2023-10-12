import './bootstrap';

import Vue from 'vue';
import Container from './components/container.vue';

Vue.component('container-component', Container);

const app = new Vue({
    el: '#app',
});


// comandos para  importar y usar Vue.js:
//import contnido from '@/components/container.vue'


/*window.app = createApp({
    setup() {
        return {
            el:'#app',
            data :{
                menu: 0
            }
        };
    },
    components: {
        contnido
    },
}).mount('#app'); */
