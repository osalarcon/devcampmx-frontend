<template>
<div>
    <todo-navbar :viewSelection="'landing'"></todo-navbar>

    <router-link to="./Login">Login</router-link>
</div>
</template>

<style>
.main-content {
  background: blue;
  width: 100%;
  height: calc(100vh - 81px);
}
</style>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    "todo-navbar": Navbar
  }
};
</script>
