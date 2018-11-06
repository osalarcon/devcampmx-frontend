<template>
<div>

    <el-button class="hamburger hamburger--collapse absolute" v-bind:class="{ 'is-active': isActive }" @click="collapseMenu()" type="button">
        <span class="hamburger-box">
            <span class="hamburger-inner"></span>
        </span>
    </el-button>

    <el-menu default-active="1" class="el-menu-vertical" text-color="#fff" active-text-color="#ffd04b" :collapse="!isCollapse">
        <el-menu-item index="1" style="height:100px" class="gradient-primary full-bottom-end">
            <span slot="title">ToDoList HOY</span>
        </el-menu-item>
        <el-submenu index="2">
            <template slot="title">
                <span slot="title">PROYECTOS</span>
            </template>
            <el-menu-item-group>
                <span slot="title">Group One</span>
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3" class="full-bottom-end">
            <span slot="title">CERRAR SESIÓN</span>
        </el-menu-item>
    </el-menu>
</div>
</template>

<style lang="scss" scoped>
@import "@/variables.scss";
@import "@/style/hamburguers.min.scss";

.hamburger {
    z-index: 1;
}

.el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
}

.el-menu-vertical {
    background-color: $-secondary-color;
    height: 100vh;
    width: 0px;
}

.hamburger-inner[data-v-698cbdac],
.hamburger-inner[data-v-698cbdac]:after,
.hamburger-inner[data-v-698cbdac]:before {
    background-color: $-primary-color;
}

.hamburger.is-active .hamburger-inner[data-v-698cbdac],
.hamburger.is-active .hamburger-inner[data-v-698cbdac]:after,
.hamburger.is-active .hamburger-inner[data-v-698cbdac]:before {
    background-color: $-primary-color;
}

.el-tooltip, .el-menu-item, .el-submenu {
    padding: 0 !important;
    margin: 0 !important;
}
</style>

<script>
// import {
//     mapState,
//     mapActions
// } from "vuex";

export default {
    data() {
        return {
            isCollapse: false,
            isActive: false
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        collapseMenu() {
            this.isCollapse = !this.isCollapse;
            this.isActive = !this.isActive;
        }
    }
};
</script>
