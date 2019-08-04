import Vue from "vue"
import Vuep from "vuep"
import "vuep/dist/vuep.css"

import App from "@/App"

Vue.use(Vuep);

new Vue({
    render: h => h(App)
}).$mount("#app");
