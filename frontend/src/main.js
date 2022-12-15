import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import installElementPlus from "./plugins/element";
import clickOutside from "./plugins/click-outside";

router.beforeEach((to) => {
  document.title = `${to.meta.title} | XKSEC`;
});

const app = createApp(App);
installElementPlus(app);
app.use(clickOutside);
app.use(router);
app.mount("#app");
