/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

Vue.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
Vue.axios.defaults.withCredentials = true;


import store from './store/index.js';
import router from './router/index.js';
import i18n from './lang/index.js';


Vue.axios.interceptors.response.use(function (response) {
    return response
}, function (error) {
    if (error.response.status === 401) {
        store.dispatch('logout');
        if (router.currentRoute.name !== 'password.request' && router.currentRoute.name !== 'password.reset') {
            router.push({ name: 'login', query: { redirect: router.currentRoute.fullPath } });
        }
    }

    return Promise.reject(error)
});


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

Vue.component('app', require('./components/App.vue').default);
Vue.component('custom-modal', require('./components/CustomModal.vue').default);
Vue.component('error-forbidden', require('./components/Forbidden.vue').default);
Vue.component('error-not-found', require('./components/NotFound.vue').default);

import { BNavbar, BNavbarNav, BNavbarToggle, BNavbarBrand, BNavItem, BCollapse, BModal, BFormSelect, BFormSelectOption, BOverlay, BFormDatepicker, ModalPlugin, BAlert, BProgress, ToastPlugin } from 'bootstrap-vue';

Vue.component('b-navbar', BNavbar);
Vue.component('b-nav-item', BNavItem);
Vue.component('b-navbar-nav', BNavbarNav);
Vue.component('b-collapse', BCollapse);
Vue.component('b-navbar-toggle', BNavbarToggle);
Vue.component('b-navbar-brand', BNavbarBrand);
Vue.component('b-modal', BModal);
Vue.component('b-form-select', BFormSelect);
Vue.component('b-form-select-option', BFormSelectOption);
Vue.component('b-overlay', BOverlay);
Vue.component('b-form-datepicker', BFormDatepicker);
Vue.component('b-alert', BAlert);
Vue.component('b-progress', BProgress);

Vue.use(ModalPlugin);
Vue.use(ToastPlugin);

import { HasError, AlertError, AlertSuccess } from 'vform';

Vue.component('has-error', HasError);
Vue.component('alert-error', AlertError);
Vue.component('alert-success', AlertSuccess);

import VueContentPlaceholders from 'vue-content-placeholders';

Vue.use(VueContentPlaceholders);

import { dateFilter } from "vue-date-fns";

Vue.filter("date", dateFilter);

Vue.config.productionTip = false;

Vue.filter('capitalize', function (value) {
    if (!value) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.filter('upper', function (value) {
    if (!value) return '';
    value = value.toString();
    return value.toUpperCase();
});


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    i18n,
    store,
    router,
    el: '#app',
});
