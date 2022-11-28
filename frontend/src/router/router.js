const { createRouter, createWebHistory } = require("vue-router")

export const mainRoutes = {
    path: '/',
    component: () => import('../components/layout.vue'),
    meta: { title: '整体页面布局' },
    children: [
        {
            path: '/dashboard',
            component: () => import('../view/dashboard.vue'),
            meta: { title: '首页' },
        },
        {
            path: '/user',
            component: () => import('../view/user.vue')
        }
    ]
}

const routes = [
    { path: '/', redirect: '/dashboard' },
    mainRoutes,
    { path: '/:catchAll(.*)', component: () => import('../components/404'), meta: { title: '404' } }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
