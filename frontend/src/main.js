import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';
import installElementPlus from './plugins/element'

router.beforeEach((to) => {
    document.title = `${to.meta.title} | NickyShell`;
})

const app = createApp(App)
installElementPlus(app)
app.use(router)
app.mount('#app')
