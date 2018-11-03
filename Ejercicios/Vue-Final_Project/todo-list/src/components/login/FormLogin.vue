<template>
<section>
    <el-card :body-style="{ padding: '0px' }" class="card-form-login">
        <Header></Header>
        <div class="form-padding">
            <el-form :model="loginForm" status-icon :rules="ruleForm" ref="loginForm" class="demo-ruleForm">

                <el-form-item prop="user">
                    <el-input type="text" class="round-input" placeholder="Ingrese nombre" v-model="loginForm.user" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item prop="pass">
                    <el-input type="password" class="round-input" placeholder="Ingrese password" v-model="loginForm.pass" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item class="full-center">
                    <el-button @click="showRegister()" type="text">Registrate en la aplicación</el-button>
                </el-form-item>

                <el-form-item class="full-center">
                    <el-button type="primary" @click="submitForm('loginForm')">Submit</el-button>
                    <el-button @click="resetForm('loginForm')">Reset</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-card>

    <modal name="register-user" class="modal-size" width="80%" height="auto" :adaptive="true">
        <Register></Register>
    </modal>

</section>
</template>

<style lang="scss" scoped>
@import "@/variables.scss";

.card-form-login {
    height: 100vh;
    padding: 0px;
    margin: 0px;
}

</style>

<script>
import Register from "@/components/login/Register";
import Header from "@/components/login/Header";

export default {
    data() {
        var validateUser = (rule, value, callback) => {
            if (!value) {
                return callback(new Error("Por favor, inserte el nombre"));
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
        return {
            loginForm: {
                pass: "",
                user: ""
            },
            ruleForm: {
                pass: [{
                    validator: validatePass,
                    trigger: "blur"
                }],
                user: [{
                    validator: validateUser,
                    trigger: "blur"
                }]
            }
        };
    },
    components: {
        Register,
        Header
    },
    methods: {
        showRegister() {
            this.$modal.show("register-user");
        },
        hideRegister() {
            this.$modal.hide("register-user");
        },
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.$router.replace('/dashboard');
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
