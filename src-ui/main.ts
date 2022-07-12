import { createApp } from 'vue'
import App from './app.vue'
import Harlem from '@harlem/core';

import {
    selectMenu
    // @ts-ignore this makes me sad :(
} from 'figma-plugin-ds';

createApp(App)
    .use(Harlem)
    .mount('#app');

selectMenu.init();
