import { createApp } from "vue";
import App from "@/App.vue";
const app = createApp(App);


import router from "@/router";
app.use(router);

// main app css
import "@/assets/css/app.css";


//vue-meta
import { createHead } from "@vueuse/head";
const head = createHead();
app.use(head);





app.mount("#app");
