import App from './app.vue'
import Harlem from '@harlem/core';

import {
    createApp
} from 'vue'

import {
    createRouter,
    createWebHashHistory,
} from 'vue-router';

import routes from './routes/index';

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

createApp(App)
    .use(Harlem)
    .use(router)
    .mount('#app');

