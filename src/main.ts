import { createApp } from "vue";
import App from "./App.vue";
import reveal from "./directives/reveal.ts";
import { i18n } from "./i18n.ts";
import "vue3-carousel/carousel.css";
import "./assets/styles/main.css";

const app = createApp(App);

app.use(i18n);
app.directive("reveal", reveal);
app.mount("#app");
