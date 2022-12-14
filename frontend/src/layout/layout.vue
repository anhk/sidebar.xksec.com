<template>
  <el-container>
    <el-aside :class="isCollapse ? 'el-aside-collapse' : ''">
      <Sidebar :isCollapse="this.isCollapse" />
    </el-aside>
    <el-container>
      <el-header>
        <Header v-on:doCollapse="doCollapse"></Header>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Sidebar from "@/layout/sidebar";
import Header from "@/layout/header";

export default {
  name: "layout",
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    doCollapse(isCollapse) {
      this.isCollapse = isCollapse;
    },
  },
  components: {
    Sidebar,
    Header,
  },
};
</script>

<style scoped>
.el-container,
.el-main {
  width: 100%;
  height: 100%;
  background: #f5f7f9;
}

.el-aside {
  width: 240px;
  transition: all 0.5s ease;
}

.el-header {
  background: #fff;
}

.el-aside.el-aside-collapse {
  width: 68px;
}

.el-aside::-webkit-scrollbar {
  display: none;
}
</style>
