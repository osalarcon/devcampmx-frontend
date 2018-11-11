<template>
<div id="container-task">
    <v-container grid-list-xl text-xs-center class="scroll-y container-task-scroll">
        <div v-for="taskItem in currentTasks" :key="taskItem.id">
            <Task :taskValue="taskItem"></Task>
        </div>

        <v-alert v-if="currentTasks.length == 0" :value="true" color="warning" class="full-center " outline>
            <font-awesome-icon icon="exclamation-triangle" fixed-width size="2x" class="exclamation" :style="{color: '#ffc107'}" />
            No hay tareas que coincidan con esta búsqueda.
        </v-alert>
    </v-container>
</div>
</template>

<style lang="scss" scoped>
@import "@/variables.scss";

#container-task {
    height: calc(100vh - 81px);
    width: 100vw;
    min-height: initial;
}

.background-task {
    height: 100%;
    width: 100%;
}

.heigth-100 {
    height: 100px;
}

.background-task img {
    margin: -50px 0 0 -100px;
}
</style>

<script>
import {
    mapState
} from "vuex";
import Task from "@/components/dashboard/Task";
import background from "@/assets/background_dashboard.jpg";
import moment from 'moment';

export default {
    data() {
        return {
            background: background
        };
    },
    components: {
        Task
    },
    computed: {
        currentTasks() {
            return this.tasks.filter(
                task => {
                    switch (this.menuSelection) {
                        case 0:
                            return !task.state &&
                                (this.dateSelection != '' && this.dateSelection != null ?
                                    (moment(task.date).format('DD-MM-YYYY') == moment(this.dateSelection).format('DD-MM-YYYY')) :
                                    (moment(task.date).format('DD-MM-YYYY') == moment(new Date()).format('DD-MM-YYYY')));
                        case 1:
                            return !task.state &&
                                (this.dateSelection != '' && this.dateSelection != null ?
                                    (moment(task.date).format('DD-MM-YYYY') == moment(this.dateSelection).format('DD-MM-YYYY')) : true);
                        case 2:
                            return task.state &&
                                (this.dateSelection != '' && this.dateSelection != null ?
                                    (moment(task.date).format('DD-MM-YYYY') == moment(this.dateSelection).format('DD-MM-YYYY')) : true);
                    }

                }
            );
        },
        ...mapState(["tasks", "menuSelection", "dateSelection"])
    },
};
</script>
