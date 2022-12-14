<template>
  <div class="home-content">
    <i class="bx bx-menu" :onclick="this.doCollapse"></i>
    <span class="text">Drop Down Sidebar</span>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    doCollapse() {
      this.isCollapse = !this.isCollapse;
      this.$emit("doCollapse", this.isCollapse);
    },
  },
};
</script>

<style scoped>
.home-content {
  height: 60px;
  display: flex;
  align-items: center;
}
.home-content .bx-menu,
.home-content .text {
  color: #11101d;
  font-size: 35px;
}

.home-content .bx-menu {
  margin: 0 15px;
  cursor: pointer;
}
.home-content .text {
  font-size: 26px;
  font-weight: 600;
}
</style>
