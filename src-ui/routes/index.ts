import Index from './index.vue';
import Optimization from './optimization.vue';
import Export from './export.vue';

const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/optimization',
        component: Optimization,
    },
    {
        path: '/export',
        component: Export,
    }
];

export default routes;