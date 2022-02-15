import { createRouter, createWebHashHistory } from 'vue-router';

import Dataset1 from '../views/Dataset1.vue';
import Dataset2 from '../views/Dataset2.vue';
import Dataset3 from '../views/Dataset3.vue';
import Dataset4 from '../views/Dataset4.vue';
// import NotFound from '../views/NotFound.vue';

const routes = [
    {
        path: '/',
        name: 'Dataset1',
        component: Dataset1,
        meta: {
            title: 'Twitter Dataviz : Kylian Mbappé',
        }
    },
    {
        path: '/Dataset2',
        name: 'Dataset2',
        component: Dataset2,
        meta: {
            title: 'Twitter Dataviz : Cristiano Ronaldo',
        }
    },
    {
        path: '/Dataset3',
        name: 'Dataset3',
        component: Dataset3,
        meta: {
            title: 'Twitter Dataviz : Neymar Jr',
        }
    },
    {
        path: '/Dataset4',
        name: 'Dataset4',
        component: Dataset4,
        meta: {
            title: 'Twitter Dataviz : Kylian Mbappé',
        }
    },
    // {
    //     name: 'NotFound',
    //     path: '/:pathMatch(.*)',
    //     component: NotFound,
    //     meta: {
    //         title: '404 Not Found',
    //     }
    // }
]

const router = createRouter({
    history : createWebHashHistory(process.env.BASE_URL),
    routes
});

router.afterEach((to) => {
    document.title = to.meta.title;
})

export default router;
