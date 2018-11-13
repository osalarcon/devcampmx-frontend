<template>
<div class="full-center margin-padding-task">
    <el-card shadow="always" :body-style="{ padding: '0px', width: '100%', backgroundColor:backgroundTask }" class="task-container">

        <div class="task-item full-center">
            <div class="item-state">
                <el-checkbox v-model="taskValue.state" border></el-checkbox>
            </div>

            <div class="full-center item item-name card-items">
                <p>
                    {{taskValue.name}}
                </p>
            </div>
            <div class="full-center item item-date card-items">
                <p>
                    {{taskValue.date | moment("DD/MM/YYYY h:mm:ss a")}}
                </p>
            </div>
        </div>

        <!--
        <div class="full-center">
            <p>
                {{taskValue.id}}
            </p>
        </div>
        -->
    </el-card>
</div>
</template>

<style lang="scss" scoped>
@import "@/variables.scss";

.card-items {
    font-size: 2em;
}

.item-name {
    width: 40%;
    overflow: hidden;
    display: -webkit-box;
    line-height: 2em;
    /* fallback */
    max-height: 2em;
    /* fallback */
    -webkit-line-clamp: 1;
    /* number of lines to show */
    -webkit-box-orient: vertical;
}

@media only screen and (max-width: 375px) {
    .card-items {
        font-size: 1em;
    }

    .item-name {
        width: 40%;
        overflow: hidden;
        display: -webkit-box;
        line-height: 1em;
        /* fallback */
        max-height: 1em;
        /* fallback */
        -webkit-line-clamp: 1;
        /* number of lines to show */
        -webkit-box-orient: vertical;
    }
}

.task-container {
    width: 90%;
}

.checkbox {
    height: 100%;
}

.task-container .task-item {
    display: flex;
    flex-wrap: wrap;
}

.item {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
}

.item-state,
.item-name p,
.item-date p {
    color: $-background-secondary;
}

.item-state {
    border: 1px;
    border-color: $-background-secondary;
}

.item-state {
    width: 10%;
    border-color: $-background-secondary;
}

.item-date {
    width: 20%;
    font-size: 1em;
}

.el-checkbox.is-bordered.el-checkbox--small {
    border-color: #7a32d5;
    color: #7a32d5;
}
</style>

<script>
import {
    mapState
} from "vuex";

export default {
    props: ["taskValue"],
    data() {
        return {
            checked: false
        };
    },
    computed: {
        backgroundTask() {
            return (this.taskValue.date >= new Date()) || (this.menuSelection == 2) ? '#e0f1ff' : '#ffc107';
        },
        ...mapState(["menuSelection"])
    },
};
</script>
