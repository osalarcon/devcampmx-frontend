<template>
<div>
    <Menu class="absolute"></Menu>
    <Navbar :viewSelection="'dashboard'"></Navbar>

    <router-view />

    <modal name="editTask">
        <EditTask></EditTask>
    </modal>
</div>
</template>

<style lang="scss" scoped>
@import "@/variables.scss";
</style>

<script>
import EditTask from "@/components/dashboard/EditTask";
import Tasks from "@/components/dashboard/Tasks";
import Menu from "@/components/dashboard/Menu";
import Navbar from "@/components/Navbar";


//actions
export default {
    components: {
        EditTask,
        Tasks,
        Menu,
        Navbar,
        Tasks,
    },
    methods: {
        
        hideEditTask() {
            this.$modal.hide("editTask");
        }
    }
};
</script>
