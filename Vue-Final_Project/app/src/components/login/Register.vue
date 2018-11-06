<template>
<div class="form-padding ">
    <div class="head-register">
        <el-button icon="el-icon-close" circle></el-button>
    </div>

    <div class="full-center">
        <h1>Registro</h1>
    </div>

    <el-form :model="registerForm" status-icon :rules="ruleLogin" ref="registerForm" class="demo-ruleForm">
        <el-form-item prop="name">
            <el-input type="text" class="round-input" placeholder="Nombre Completo" v-model="registerForm.name" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item prop="email">
            <el-input type="email" class="round-input" placeholder="Email" v-model="registerForm.email" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item prop="pass">
            <el-input type="password" class="round-input" placeholder="Contraseña" v-model="registerForm.pass" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item prop="confirmPass">
            <el-input type="password" class="round-input" placeholder="Confirme Contraseña" v-model="registerForm.confirmPass" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item class="full-center">
            <el-button type="primary" @click="hideRegister()">Cancelar</el-button>
            <el-button type="primary" @click="submitRegister('registerForm')">Continuar</el-button>
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
        var validateEmail = (rule, value, callback) => {
            if (!value) {
                return callback(new Error("Por favor, inserte el correo"));
            }
            setTimeout(() => {
                callback();
            }, 1000);
        };
        var validatePass = (rule, value, callback) => {
            if (!value) {
                callback(new Error("Ingrese el password"));
            } else {
                callback();
            }
        };
        var validateConfirmPass = (rule, value, callback) => {
            if (!value) {
                callback(new Error("Ingrese el password"));
            } else {
                callback();
            }
        };
        return {
            registerForm: {
                pass: "",
                user: "",
                confirmPass: "",
                email: ""
            },
            ruleLogin: {
                name: [{
                    validator: validateName,
                    trigger: "blur"
                }],
                email: [{
                    validator: validateEmail,
                    trigger: "blur"
                }],
                pass: [{
                    validator: validatePass,
                    trigger: "blur"
                }],
                confirmPass: [{
                    validator: validateConfirmPass,
                    trigger: "blur"
                }],
            }
        };
    },
    methods: {
        hideRegister() {
            this.$modal.hide("register-user");
        },
        submitRegister(formName) {
            this.$refs[formName].validate(valid => {
              console.log('Es valido: ' + valid);
                if (valid) {
                    //alert("submit!");
                    this.hideRegister();
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
};
</script>
