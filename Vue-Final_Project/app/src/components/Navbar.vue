<template>
<div class="full-center navbar" mode="horizontal">

    <v-container class="landing-container" v-if="viewSelection=='landing'">
        <v-layout row wrap>
            <v-layout align-start justify-end row>
                <v-btn @click="goLogin()" outline round color="white">Login</v-btn>
            </v-layout>
        </v-layout>
    </v-container>

    <div v-if="viewSelection=='dashboard'" class="dashboard-container">
        <div>
            <el-date-picker type="date" size="large" format="dd-MM-yyyy" popper-class="el-date-picker" v-model="datePicker" class="el-date-picker" placeholder="Seleccione fecha" :change="setDateSelection(datePicker)"></el-date-picker>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import '@/variables.scss';

.el-date-piker {
    color: $-secondary-color;
}

.dashboard-container {
    display: flex;
}

.dashboard-container div {
    margin-left: 10px;
}

.navbar {
    z-index: 2;
}

@media only screen and (max-width: 375px) {
    .dashboard-container {
        margin-left: 30px;
    }

}
</style>

<script>
import {
    mapState,
    mapActions
} from "vuex";

export default {
    props: ['viewSelection'],
    data() {
        return {
            datePicker: '',
        }
    },
    methods: {
        goLogin() {
            this.$router.push('login');
        },
        ...mapActions([
            'setDateSelection'
        ])
    },
    computed: {
        ...mapState(["dateSelection"])
    },
};
</script>
