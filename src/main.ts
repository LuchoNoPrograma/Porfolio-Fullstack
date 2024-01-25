import {createApp} from 'vue'

//@ts-ignore
import Ripple from 'vue3-whr-ripple-directive/src/ripple.js';

import './assets/scss/style.scss';
import './assets/css/icofont.css';
import './assets/css/stroke-gap-icons.css';
import App from "./App.vue";
import {router} from "./router/router.ts";


const app = createApp(App);
app.directive('ripple', Ripple);
Ripple.color = 'rgba(255, 255, 255, 0.35)';
Ripple.zIndex = 55;

app.use(router)
app.mount('#app');

export default app;

