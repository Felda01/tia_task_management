import Vue from 'vue';
import routes from './routes.js';
import VueRouter from 'vue-router';
import store from "../store";
import Cookies from 'js-cookie';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    let payload = {
        loading: true
    };
    store.dispatch('setLoading', payload).then(() => {
        const token = Cookies.get('x-access-token');

        if (!token || (token && !store.state.token)) {
            store.dispatch('refreshToken')
                .then(() => {
                    next();
                })
                .catch(errors => {
                    store.dispatch('logout');
                    next();
                });
        } else {
            next();
        }
    });
});

router.afterEach((to, from) => {
    if (!store.state.user) {
        store.dispatch('getUser');
    }

    let payload = {
        loading: false
    };
    store.dispatch('setLoading', payload);
});

export default router;
