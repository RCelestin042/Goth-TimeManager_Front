import Vue from "vue";
import "antd/dist/antd.css";
import Antd from "ant-design-vue";
import VueRouter from "vue-router";
import VueApexCharts from "vue-apexcharts";
import axios from "axios";
import VueAxios from "vue-axios";
import VueJWT from "vuejs-jwt";
//import de vues
import App from "./App.vue";
import Employee from "./components/Employee.vue";
import Login_Vue from "./components/Login.vue";

Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(VueRouter);
Vue.use(VueApexCharts);
Vue.use(VueAxios, axios);
Vue.use(VueJWT);

Vue.component("apexchart", VueApexCharts);
Vue.component("router", VueRouter);

const router = new VueRouter({
  // mode: "history",
  routes: [
    {
      path: "",
      component: Login_Vue,
      name: "Login"
    },
    {
      path: "/user/:token",
      component: Employee,
      name: "User",
      props: true
    }
  ]
});


new Vue({
  render: h => h(App),
  router
}).$mount("#app");
