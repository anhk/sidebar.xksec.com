<template>
    <div class="home-content">
        <i class='bx bx-menu' :onclick="this.doCollapse"></i>
        <span class="text">Drop Down Sidebar</span>
    </div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            isCollapse: false
        }
    },
    methods: {
        doCollapse() {
            this.isCollapse = !this.isCollapse
            console.log(this.isCollapse)
            this.$emit("doCollapse", this.isCollapse)
        }
    }
}
</script>

<style scoped>

</style>