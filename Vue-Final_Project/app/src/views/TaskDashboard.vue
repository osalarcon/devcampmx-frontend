<template>
<div id="container-dashboard">
    <div>
        <Tasks></Tasks>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import "@/variables.scss";

#container-dashboard {
    height: calc(100vh - 81px);
}
</style>

<script>
import Tasks from "@/components/dashboard/Tasks";
import {
    mapState
} from "vuex";

export default {
    components: {
        Tasks,
    },
    computed: {
        ...mapState(["dateSelection"])
    },
}
</script>
