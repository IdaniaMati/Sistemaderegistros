import './bootstrap';


// comandos para  importar y usar Vue.js:
import contnido from '@/components/container.vue'


window.app = createApp({
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
}).mount('#app');


