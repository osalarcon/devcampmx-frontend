import Vue from "vue";
import "./plugins/vuetify";
import VModal from "vue-js-modal";
import Vuetify from "vuetify";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/es";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
// import { brandsIcons } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas);


import App from "./App.vue";
import router from "./router";
import store from "./store";


Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Vuetify, {
  iconfont: "mdi"
});

Vue.use(VModal);
Vue.use(ElementUI, { size: "small", zIndex: 3000, locale });
Vue.use(require('vue-moment'));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
