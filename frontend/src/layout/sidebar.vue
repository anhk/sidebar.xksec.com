<template>
    <div class="container">
        <div class="logo-details">
            <img class="logo" src="../assets/img/logo.png" />
            <img class="logo-name"  src="../assets/img/logo-name.png"/>
        </div>

        <el-menu :collapse="isCollapse" :default-active="defaultActive" mode="vertical" background-color="#11101d"
            text-color="rgb(191, 203, 217)" active-text-color="rgb(64, 158, 255)">
            <div v-for="(item, index) in menu" :key="index" class="nav-links">
                <!-- 没有二级菜单的 -->
                <el-menu-item :index="item.path" v-if="item.children.length == 0">
                    <router-link :to="{ path: item.path }">
                        <i class='bx bxl-c-plus-plus'></i>
                        <span class="link_name">{{ item.meta.title }}</span>
                    </router-link>
                </el-menu-item>
                <!-- 有二级菜单的 -->
                <el-sub-menu :index="index + ''" v-else>
                    <template v-slot:title>
                        <i class='bx bxl-c-plus-plus'></i>
                        <span class="link_name">{{ item.meta.title }}</span>
                    </template>
                    <el-menu-item v-for="(item_, index_) in item.children" :key="index_" :index="item_.path"
                        class="sub-nav-links">
                        <router-link :to="{ path: item_.path }">
                            <span class="sub_link_name"> {{ item_.meta.title }}</span>
                        </router-link>
                    </el-menu-item>
                </el-sub-menu>
            </div>
        </el-menu>

    </div>
</template>

<script>
import { mainRoutes } from '../router/router';
import 'boxicons/css/boxicons.min.css';

export default {
    name: 'sidebar',
    props: ['isCollapse'],
    data() {
        return {
            menu: [],
            defaultActive: this.$route.path
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

<style scoped>
.container {
    width: 100%;
    height: 100%;
    background: #11101d;
    z-index: 100;
    user-select: none;
    padding: 0;
}

.logo-details {
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
}

.logo-details .logo {
    color: #fff;
    height: 50px;
    width: 50px;
    margin: 0 8px 0 12px;
    min-width: 50px;
    text-align: center;
    line-height: 50px;
}

.logo-details .logo-name{
    width: calc(100% - 68px);
    padding: 0 20px 0 10px;
}

.nav-links li i {
    height: 52px;
    min-width: 48px;
    text-align: start;
    line-height: 50px;
    padding: 0 0 0 10px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
}

.el-menu {
    width: 100%;
    padding: 0;
    border: 0;
}

.el-menu-item>a {
    width: 100%;
    color: inherit;
    text-decoration: none;
}

.el-aside.el-aside-collapse .el-sub-menu.is-opened .sub-nav-links {
    display: none;
}

.el-aside .link_name {
    transition: all 0.5s ease;
    transition-delay: 0.2s;
}

.el-aside.el-aside-collapse .link_name {
    display: none;
}


/* el-memu-item 关闭右边的小三角 */
.el-sub-menu :deep(.el-sub-menu__icon-arrow) {
    display: none;
}

.link_name {
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    transition: all 0.5s ease;
    transition-delay: 0.2s;
}

.sub_link_name {
    color: #fff;
    font-size: 15px;
    padding: 5px 0 0 30px;
    white-space: nowrap;
    opacity: 0.6;
}

.sub-nav-links {
    background: #1d1b31;
}

.sub-nav-links.is-active {
    background: #333399;
}
</style>