<template>
<section id="login-content">
    <AsideLogin id="aside-login"></AsideLogin>
    <FormLogin id="form-login"></FormLogin>
</section>
</template>

<style lang="scss" scoped>
@import '@/variables.scss';

#login-content {
  display: flex;
}

.el-card {
  border: none;
}

@media (min-width: 375px) {
  #aside-login {
    width: calc(100% - 450px);
    height: 100vh;
  }

  #form-login {
    width: 450px;
    height: 100vh;
  }
}

@media (max-width: 375px) {
  #aside-login {
    display: none;
  }

  #form-login {
    width: 100%;
    height: 100vh;
  }
}
</style>

<script>
import FormLogin from "@/components/login/FormLogin";
import AsideLogin from "@/components/login/AsideLogin";

export default {
  components: {
    FormLogin,
    AsideLogin
  }
};
</script>
