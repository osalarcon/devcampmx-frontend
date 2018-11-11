<template>
<div>
    <Menu class="absolute menu-dashboard"></Menu>

    <Navbar :viewSelection="'dashboard'"></Navbar>

    <router-view />

    <div class="absolute full-bottom-center" @click="showEditTask()">
        <a href="#" class="float ">
            <i class="el-icon-plus float-button"></i>
        </a>
    </div>
    
    <modal name="edit-task"  width="80%" height="auto" :adaptive="true">
        <EditTask></EditTask>
    </modal>
</div>
</template>

<style lang="scss" scoped>
@import "@/variables.scss";

</style>

<script>
import EditTask from "@/components/dashboard/EditTask";
import Menu from "@/components/dashboard/Menu";
import Navbar from "@/components/Navbar";
import {
    mapState,
    mapActions
} from "vuex";

//actions
export default {
    components: {
        EditTask,
        Menu,
        Navbar,
    },
    methods: {
        hideEditTask() {
            this.$modal.hide("edit-task");
        },
        showEditTask() {
            this.$modal.show("edit-task");
        }
    }
};
</script>
