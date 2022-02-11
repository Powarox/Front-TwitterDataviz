import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '../views/Home.vue';
// import NotFound from '../views/NotFound.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Wallet - Accueil',
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
