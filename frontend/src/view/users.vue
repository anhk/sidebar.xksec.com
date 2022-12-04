<template>
    <div>User</div>
    <el-button type="primary" @click="drawer = !drawer">Drawer</el-button>

    <el-drawer v-model="drawer" >
        <template #title>
            <span>{{title }}</span>
        </template>

        <template #default>
            <span>Hey there.</span>
        </template>

        <template #footer>
            <div style="flex:auto">
                <el-button @click="drawer = false">Cancel</el-button>
                <el-button type="primary">Comfirm</el-button>
            </div>
        </template>
    </el-drawer>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            title: "HelloWorld",
        }
    }
}
</script>