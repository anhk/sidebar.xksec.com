<template>
  <div class="sidebar" :class="{ close: isCollapse }">
    <div class="logo-banner">
      <img class="logo-image" src="../assets/img/logo.png" />
      <img class="logo-name" src="../assets/img/logo-name.png" />
    </div>

    <ul class="menu-content">
      <li
        v-for="(item, index) in menu"
        :key="index"
        :class="{ showMenu: item.active }"
      >
        <template v-if="item.children.length == 0">
          <router-link :to="{ path: item.path }" class="menu-item">
            <i class="bx" :class="item.meta.icon"></i>
            <div class="menu-label">
              <span class="title">{{ item.meta.title }}</span>
            </div>
          </router-link>

          <ul class="sub-menu">
            <li>
              <router-link :to="{ path: item.path }">
                <span class="title">{{ item.meta.title }}</span>
              </router-link>
            </li>
          </ul>
        </template>

        <div v-else>
          <div class="menu-item" @click="doExpand(item)">
            <i class="bx" :class="item.meta.icon"></i>
            <div class="menu-label">
              <span>{{ item.meta.title }} </span>
              <i class="bx bx-chevron-down arrow"></i>
            </div>
          </div>
          <ul class="sub-menu">
            <div
              v-if="isCollapse && item.active"
              v-click-outside="() => doExpand(item)"
            ></div>
            <span class="title">{{ item.meta.title }}</span>
            <li v-for="(item_, index_) in item.children" :key="index_">
              <router-link :to="{ path: item_.path }" :key="index_">
                <span> {{ item_.meta.title }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mainRoutes } from "../router/router";
import "boxicons/css/boxicons.min.css";

export default {
  name: "sidebar",
  props: ["isCollapse"],
  data() {
    return {
      menu: [], // 菜单
    };
  },
  methods: {
    generateSubMenu(routes) {
      let m = [];
      for (const i in routes) {
        let r = routes[i];
        r.children = this.generateSubMenu(r.children);
        if (routes[i].meta && routes[i].meta.menu) {
          m.push(r);
        }
      }
      return m;
    },
    generateMenu() {
      // 重新生成菜单
      this.menu = this.generateSubMenu(mainRoutes.children);
    },
    doExpand(item) {
      // 打开一个菜单
      if (item.active) {
        item.active = false;
        return;
      }
      for (const i in this.menu) {
        this.menu[i].active = false;
      }
      item.active = true;
    },
  },
  created() {
    this.generateMenu();
  },
};
</script>

<style scoped>
.sidebar {
  /* width: 100%; */
  width: 240px;
  height: 100%;
  background: #11101d;
  transition: all 0.5s ease;
  z-index: 100;
  user-select: none;
}
.sidebar a,
.sidebar i {
  text-decoration: none;
}

.sidebar.close {
  width: 68px;
}

.sidebar .logo-banner {
  height: 78px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.sidebar .logo-banner .logo-image {
  max-width: 68px;
  margin: 5px 10px 15px;
}

.sidebar .logo-banner .logo-name {
  max-width: calc(100% - 68px);
  padding: 20px 10px 20px 0px;
  transition: all 0.3s ease;
  transition-delay: 0.1s;
}

.sidebar .menu-content {
  height: calc(100% - 78px);
  overflow: hidden;
}

.sidebar.close .menu-content {
  overflow: visible;
}

.sidebar .sub-menu .title {
  opacity: 0;
  display: none;
  height: 0;
}

.sidebar.close .sub-menu .title {
  opacity: 1;
  display: block;
  height: auto;
}

.sub-menu li {
  width: 100%;
  padding: 10px 0 10px 78px;
}

.menu-item:hover,
.sub-menu li:hover {
  background: #273746;
}

.sub-menu li a {
  width: 100%;
}

.sub-menu li:has(a.router-link-active) {
  background: #339;
}

a.menu-item,
div.menu-item {
  display: flex;
  /* width: 100%; */
  height: 50px;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
}

a.menu-item i,
div.menu-item i {
  color: #fff;
  font-size: 30px;
  height: 50px;
  min-width: 68px;
  text-align: center;
  line-height: 50px;
}

a.menu-item span,
div.menu-item span {
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  transition: all 0.3s, opacity 0.3s;
  transition-delay: 0s, 0.3s;
}

.menu-content li.showMenu i.arrow {
  transform: rotate(-180deg);
}

.sidebar.close a.menu-item span,
.sidebar.close div.menu-item span,
.sidebar.close .menu-content i.arrow {
  opacity: 0;
  transition: all 0.5s, opacity 0.1s;
  transition-delay: 0.2s, 0s;
}

.sidebar .menu-label {
  width: calc(100% - 68px);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

li .sub-menu {
  background: #1d1b31;
  opacity: 0;
  height: 0;
  overflow: hidden;
}

li.showMenu .sub-menu {
  display: block;
  opacity: 1;
  height: auto;
}

li.showMenu .sub-menu span {
  color: #fff;
  font-size: 15px;
  padding: 5px 0;
  white-space: nowrap;
  opacity: 0.6;
  transition: none;
}

/* li.showMenu .sub-menu li {
  padding: 10px 0;
} */

li.showMenu .sub-menu span:hover {
  opacity: 1;
}

.sidebar.close li.showMenu .sub-menu {
  position: fixed;
  left: 72px;
  transform: translateY(-50px);
  display: block;
}

.sidebar.close li.showMenu .sub-menu > span {
  padding: 10px 0 10px 20px;
  font-size: 18px;
  width: 120px;
}

.sidebar.close li.showMenu .sub-menu li {
  padding: 10px 0 10px 20px;
  width: 120px;
}
</style>
