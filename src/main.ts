import { createApp } from "vue"; //@ts-ignore
import Ripple from "vue3-whr-ripple-directive/src/ripple.js";
import VueTablerIcons from "vue-tabler-icons";

import "./assets/scss/style.scss";
import "./assets/css/icofont.css";
import "./assets/css/stroke-gap-icons.css";
import App from "./App.vue";
import { router } from "./router/router.ts";
import { createPinia } from "pinia";
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";


import "./assets/scss/override.scss";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(VueTablerIcons);
app.use(VueViewer, {
  defaultOptions: {
    rotatable: false
  }
});

Ripple.color = "rgba(255, 255, 255, 0.35)";
Ripple.zIndex = 55;
app.directive("ripple", Ripple);

app.mount("#app");

export default app;
