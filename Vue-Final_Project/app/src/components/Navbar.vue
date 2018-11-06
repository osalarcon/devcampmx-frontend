<template>
<div class="full-center navbar" mode="horizontal">
    <el-button v-if="viewSelection=='landing'" index="1">Processing Center</el-button>
    <el-date-picker v-if="viewSelection=='dashboard'" type="date" v-model="datePicker" class="el-date-picker" placeholder="Pick a date"></el-date-picker>
</div>
</template>

<style lang="scss" scoped>
@import '@/variables.scss';

.el-date-piker {
    color: $-secondary-color;
}
</style>

<script>
export default {
    props: ['viewSelection'],
    data() {
        return {
            datePicker: ''
        }
    }
};
</script>
