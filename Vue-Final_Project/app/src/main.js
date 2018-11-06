import Vue from "vue";
import VModal from "vue-js-modal";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/es";

import store from "./store";

import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(VModal);
Vue.use(ElementUI, { size: "small", zIndex: 3000, locale });
Vue.use(require('vue-moment'));

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
