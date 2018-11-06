<template>
<div>
    <todo-navbar></todo-navbar>

    <div class="main-content">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
    components: {
        "todo-navbar": Navbar
    }
};
</script>

<style>

</style>
