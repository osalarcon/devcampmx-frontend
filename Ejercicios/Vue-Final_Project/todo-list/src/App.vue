<template>
<div id="app">
    <router-view />
</div>
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
