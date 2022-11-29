<template>
    <el-container>
        <el-aside>
            <sidebar/>
        </el-aside>
        <el-container>
            <el-header>
                <div>aas</div>
            </el-header>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import sidebar from "@/layout/sidebar";
export default {
    name: "main",
    components: {
        sidebar
    }
}
</script>

<style scoped>
.el-container,
.el-main {
    widows: 100%;
    height: 100%;
}

.el-aside {
    width: 260px;
}
</style>