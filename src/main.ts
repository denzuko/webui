import Vue from "vue"
import App from "./App"
import Vuetify from "./styles"
import router from "./router"

let app = new Vue({
    el: "#app",
    components: {
        App
    },
    template: "<App/>",
    data: {
        name: "World"
    }
})
