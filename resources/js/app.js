import './bootstrap';


// comandos para  importar y usar Vue.js:
import HelloWorld from '@/components/HelloWorld.vue'

window.app = createApp({
    setup() {
        return {
            message: 'Welcome to Your Vue.js App',
        };
    },
    components: {
        HelloWorld
    },
}).mount('#app');


