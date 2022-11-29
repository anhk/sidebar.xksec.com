<template>
    <div>Sidebar</div>
</template>

<script>

import { mainRoutes } from '../router/router';

export default {
    name: 'sidebar',
    data() {
        return {
            menu: [],
        }
    },
    methods: {

        generateSubMenu(routes) {
            let m = []
            for (const i in routes) {
                let r = routes[i]
                r.children = this.generateSubMenu(r.children)
                if (routes[i].meta && routes[i].meta.menu) {
                    m.push(r)
                }
            }
            return m
        },
        generateMenu() {// 重新生成菜单
            this.menu = this.generateSubMenu(mainRoutes.children)
        }
    },
    created() {
        this.generateMenu()
        console.log(this.menu)
    }
}
</script>

