<template>
<div class="full-center margin-padding-task">
    <el-card shadow="always" :body-style="{ padding: '0px', width: '100%', backgroundColor:'#e0f1ff' }" class="task-container">
        <div class="task-item full-center">
            <div class="full-center item-state checkbox">
                <el-checkbox v-model="taskValue.state" size="large" class="full-center checkbox" border></el-checkbox>
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

@media only screen and (max-width: 375px) {
    .card-items {
        font-size: 1em;
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

.item-name {
    width: 40%;
}

.item-date {
    width: 30%;
    font-size: 1em;
}
</style>

<script>
export default {
    props: ["taskValue"],
    data() {
        return {
            checked: false
        };
    }
};
</script>
