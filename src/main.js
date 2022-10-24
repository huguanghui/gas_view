import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue3 } from "bootstrap-vue-3";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

axios.defaults.baseURL = "/";
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
axios.defaults.timeout = 5000;

const app = createApp(App);

app.config.globalProperties.$http = axios;
app.use(BootstrapVue3);
app.use(router);
app.use(store);
app.mount("#app");
