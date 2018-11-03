<template>
<div id="header-login" class="full-center">
    <img class="logo-login" :src="logo" alt="logo"/>
</div>
</template>

<style lang="scss" scoped>
@import '@/variables.scss';

#header-login {
    width: 100%;
    height: 200px;

    background: $-primary-color;
}

#header-login .logo-login {
    width: 100px;
    height: 100px;
}

@media (min-width: 375px) {
    /*#form-login {
      background: blue;
      width: 450px;
      height: 100vh;
  }*/
}

@media (max-width: 375px) {}
</style>

<script>
import logo from "@/assets/todo_logo.png";

export default {
    data() {
        return {
            logo: logo
        };
    }
};
</script>
