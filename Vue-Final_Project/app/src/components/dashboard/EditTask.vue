<template>
<div class="form-padding ">
    <div class="head-register">
        <el-button icon="el-icon-close" circle @click="hideTask();"></el-button>
    </div>

    <div class="full-center">
        <h1 class="primary-color">Nueva Tarea</h1>
    </div>

    <el-form :model="taskForm" status-icon :rules="ruleLogin" ref="taskForm" class="demo-ruleForm">
        <el-form-item prop="name">
            <el-input type="text" class="round-input" placeholder="Nombre de la tarea" v-model="taskForm.name" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item prop="date">
            <el-date-picker v-model="taskForm.date" type="datetime" placeholder="Seleccione fecha y hora">
            </el-date-picker>
        </el-form-item>

        <el-form-item class="full-center">
            <el-button type="primary" @click="hideTask()" :disabled="buttonLoading.isLoading">Cancelar</el-button>
            <el-button type="primary" @click="submitTask('taskForm')" :loading="buttonLoading.isLoading">{{buttonLoading.mensaje}}</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<style lang="scss" scoped>
@import "@/variables.scss";

.head-register {
    display: flex;
    justify-content: flex-end;
}
</style>

<script>
import {
    mapState,
    mapActions
} from "vuex";

export default {
    data() {
        var validateName = (rule, value, callback) => {
            if (!value) {
                return callback(new Error("Por favor, inserte el nombre"));
            }
            setTimeout(() => {
                callback();
            }, 1000);
        };
        var validateDate = (rule, value, callback) => {
            if (!value) {
                return callback(new Error("Por favor, inserte la fecha y hora"));
            }
            setTimeout(() => {
                callback();
            }, 1000);
        };
        return {
            taskForm: {
                user: "",
                date: ""
            },
            ruleLogin: {
                name: [{
                    validator: validateName,
                    trigger: "blur"
                }],
                date: [{
                    validator: validateDate,
                    trigger: "blur"
                }],
            },
            buttonLoading: {
                isLoading: false,
                mensaje: "Guardar"
            }
        };
    },
    methods: {
        hideTask() {
            this.$modal.hide("edit-task");
        },
        submitTask(formName) {
            this.guardarGuardado();
            this.$refs[formName].validate(valid => {
                this.guardarGuardado();
                if (valid) {
                    this.addTask(this.taskForm);
                    this.hideTask();
                } else {
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        guardarGuardado() {
            if (this.buttonLoading.isLoading) {
                this.buttonLoading.mensaje = "Guardando";
            } else {
                this.buttonLoading.mensaje = "Guardar";
            }
            this.buttonLoading.isLoading = !this.buttonLoading.isLoading;
        },
        ...mapActions([
            'addTask'
        ])
    }
};
</script>
