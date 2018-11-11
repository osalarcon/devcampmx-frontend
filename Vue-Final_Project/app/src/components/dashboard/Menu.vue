<template>
<v-layout wrap class="side-menu">
    <v-container align-start justify-start fill-height>
        <v-layout>
            <v-btn flat icon large @click.stop="drawer = !drawer" class="menu-item">
                <font-awesome-icon icon="bars" fixed-width size="3x" />
            </v-btn>
        </v-layout>
    </v-container>

    <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list class="pa-1">
            <v-card class="card-head">
                <v-container align-center row justify-space-around>
                    <v-layout justify-space-around align-center row>
                        <v-flex xs6 sm4>
                            <v-img :src="logo"></v-img>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-list>

        <v-list class="pt-0" dense>
            <v-divider></v-divider>

            <v-list-tile v-for="item in items" :key="item.title" @click="collapseMenu(item)" class="menu-container">
                <v-list-tile-action>
                    <font-awesome-icon :icon="item.icon" fixed-width size="2x" :style="{color: '#36a6ff'}" />
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title class="primary-color">{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</v-layout>
</template>

<style lang="scss" scoped>
@import "@/variables.scss";

//Menu Item container
.container {
    margin: 0px;
}

.menu-container {
    font-size: 1em;
}

.side-menu {
    height: 100vh;
    width: 100vw;
}

@media only screen and (max-width: 375px) {
    .side-menu {
        height: 100vh;
        width: 100vw;
    }
}

.card-head {
    background-image: linear-gradient($-background-secondary, $-primary-color);
    height: 200px;
}

.menu-item {
    color: $-primary-color;
}
</style>

<script>
import logo from "@/assets/logo.png";
import {
    mapActions
} from "vuex";

export default {
    data() {
        return {
            logo: logo,
            isCollapse: false,
            isActive: false,
            drawer: null,
            items: [{
                    id: 0,
                    title: "Hoy",
                    icon: "sun"
                },
                {
                    id: 1,
                    title: "Todos",
                    icon: "clipboard-list"
                },
                {
                    id: 2,
                    title: "Terminados",
                    icon: "calendar-check"
                },
                {
                    id: 3,
                    title: "Cerrar sesión",
                    icon: "sign-out-alt"
                }
            ]
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            // console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            //  console.log(key, keyPath);
        },
        collapseMenu(item) {
            this.drawer = !this.drawer;
            switch (item.id) {
                case 3:
                    this.setSelection(0);
                    this.$router.replace('/');
                    break;
                default:
                    this.setSelection(item.id);
                    break;
            }
            this.isCollapse = !this.isCollapse;
            this.isActive = !this.isActive;
        },
        ...mapActions([
            'setSelection',
            'setDateSelection'
        ])
    }
};
</script>
