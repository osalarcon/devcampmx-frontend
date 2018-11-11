<template>
<div class="full-center navbar" mode="horizontal">
    <el-button v-if="viewSelection=='landing'" index="1">Processing Center</el-button>
    <el-date-picker v-if="viewSelection=='dashboard'" type="date" size="large" format="dd-MM-yyyy" popper-class="el-date-picker" v-model="datePicker" class="el-date-picker" placeholder="Seleccione fecha" :change="setDateSelection(datePicker)"></el-date-picker>
</div>
</template>

<style lang="scss" scoped>
@import '@/variables.scss';

.el-date-piker {
    color: $-secondary-color;
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
            datePicker: ''
        }
    },
    methods: {
        ...mapActions([
            'setDateSelection'
        ])
    },
    computed: {
        ...mapState(["dateSelection"])
    },
};
</script>
