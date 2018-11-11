<template>
<v-app id="app">
    <router-view />
</v-app>
</template>

<style lang="scss" scoped>
@import '@/variables.scss';

</style>

<script>
export default {
    beforeCreate: function () {
        document.body.style.margin = "0px";
    }
}
</script>
