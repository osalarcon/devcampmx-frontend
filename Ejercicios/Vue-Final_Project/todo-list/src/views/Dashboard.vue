<template>
<div>
    <Navbar :viewSelection="'dashboard'"></Navbar>

    <div id="container-dashboard">
        <el-radio-group v-model="openClose" style="margin-bottom: 20px;">
            <el-radio-button :label="false">expand</el-radio-button>
            <el-radio-button :label="true">collapse</el-radio-button>
        </el-radio-group>
        <el-button type="primary" icon="el-icon-menu"></el-button>

        <Menu :openClose="openClose"></Menu>

        <button @click="showEditTask()">Register</button>
    </div>
    <modal name="editTask">
        <EditTask></EditTask>
    </modal>
</div>
</template>

<style lang="scss" scoped>
@import '@/variables.scss';

#container-dashboard {
    display: flex;
    flex-wrap: nowrap;
}
</style>

<script>
import EditTask from "@/components/dashboard/EditTask";
import Tasks from "@/components/dashboard/Tasks";
import Menu from "@/components/dashboard/Menu";
import Navbar from "@/components/Navbar";

export default {
    data() {
        return {
            openClose: false,
        }
    },
    components: {
        EditTask,
        Tasks,
        Menu,
        Navbar
    },
    methods: {
        showEditTask() {
            this.$modal.show("editTask");
        },
        hideEditTask() {
            this.$modal.hide("editTask");
        }
    }
};
</script>
