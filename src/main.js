import Vuex from 'vuex'
import router from "./router"

import 'vuetify/styles'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

import App from './App.vue'

const root = Vue.createApp({
    components: { App },
    router
})

root.use(Vuex)
root.use(createVuetify())
root.mount('body')
