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

        if (to.name !== 'login' && (!token || (token && !store.state.token))) {
            store.dispatch('refreshToken')
                .then(() => {
                    next();
                })
                .catch(errors => {
                    store.dispatch('logout');
                    if (to.name === 'password.request' || to.name === 'password.reset') {
                        next();
                    } else {
                        router.push( { name: 'login', query: { redirect: to.fullPath } });
                    }
                });
        } else {
            next();
        }
    });
});

router.afterEach((to, from) => {
    if (to.name !== 'login' && !store.state.user) {
        store.dispatch('getUser');
    }

    let payload = {
        loading: false
    };
    store.dispatch('setLoading', payload);
});

export default router;
