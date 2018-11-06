<template>
<div>
    <div v-for="taskItem in tasks" :key="taskItem.id">
        <Task :taskValue="taskItem"></Task>
    </div>
</div>
</template>

<style lang="scss" scoped>
</style>

<script>
import {
    mapState
} from "vuex";
import Task from "@/components/dashboard/Task"

export default {
    components: {
        Task,
    },
    computed: mapState(["tasks"])
};
</script>
