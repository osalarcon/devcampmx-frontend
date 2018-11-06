<template>
<div id="container-dashboard">
    <div>
        <Tasks></Tasks>
    </div>
    <div class="absolute full-bottom-center" @click="showEditTask()">
        <a href="#" class="float ">
            <i class="el-icon-plus float-button"></i>
        </a>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import "@/variables.scss";

#container-dashboard {
    height: calc(100vh - 57px);
}
</style>

<script>
import Tasks from "@/components/dashboard/Tasks";
import {
    mapState,
    mapActions
} from "vuex";


export default {
    methods: {
        showEditTask() {
            this.addTask({
                id: 3,
                name: "task 2",
                date: new Date(),
                state: 0
            })
            // this.$modal.show("editTask");
        },
        ...mapActions([
           'addTask' 
        ])
    },
    components: {
        Tasks,
    },
    
}
</script>
