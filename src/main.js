import Vuex from 'vuex';

// import 'vuetify/styles';
import { createApp } from 'vue';
import { createVuetify } from 'vuetify';

import router from './router';
import App from './App.vue';

const root = createApp({
  components: { App },
});

root.use(Vuex);
root.use(createVuetify());
root.use(router);
root.mount('body');
