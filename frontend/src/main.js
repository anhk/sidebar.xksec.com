import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';

router.beforeEach((to) => {
    document.title = `${to.meta.title} | NickyShell`;
})

const app = createApp(App)
app.use(router)
app.mount('#app')
