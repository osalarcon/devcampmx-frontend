<template>
<div class="full-center margin-padding-task">
    <el-card shadow="always" :body-style="{  padding: '0px', width: '100%'}" class="task-container">
        <div class="task-item full-center">
            <div class="full-center checkbox">
                <el-checkbox size="medium" class="full-center checkbox" @click="changeState()" border></el-checkbox>
                <!-- <el-checkbox v-model="checked3" label="Opción1" border></el-checkbox> -->
            </div>
            <div class="full-center item">
                <p>
                    {{taskValue.name}}
                </p>
            </div>
            <div class="full-center item">
                <p>
                    {{taskValue.date | moment("DD - MM - YYYY h:mm:ss a")}}
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
}
</style>

<script>
export default {
    props: ["taskValue"],
    data() {
        return {
            checked: false
        };
    },
    methods: {
        changeState() {
            //change value
        }
    }
    // computed: {
    //     getState() {
    //         return taskValue.state != 0
    //     }
    // },
};
</script>
