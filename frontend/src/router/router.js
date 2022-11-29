const { createRouter, createWebHistory } = require("vue-router")

export const mainRoutes = {
    path: '/',
    component: () => import('../layout/layout.vue'),
    meta: { title: '整体页面布局' },
    children: [
        {
            path: '/dashboard',
            component: () => import('../view/dashboard.vue'),
            meta: { title: '首页', menu: true },
        },
        {
            path: '/users',
            meta: { title: '用户管理', menu: true },
            children: [
                {
                    path: '/users/users',
                    meta: { title: '用户管理', menu: true },
                    component: () => import('../view/users.vue'),
                },
                {
                    path: '/users/roles',
                    meta: { title: '角色管理', menu: true },
                    component: () => import('../view/roles.vue'),
                },
                {
                    path: '/users/groups',
                }
            ]
        },
    ]
}

const routes = [
    { path: '/', redirect: '/dashboard' },
    mainRoutes,
    { path: '/:catchAll(.*)', component: () => import('../layout/404'), meta: { title: '404' } }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
