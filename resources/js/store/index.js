import Vue from 'vue';
import Vuex from 'vuex';
import Cookies from 'js-cookie';


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: null,
        loading: false,
        user: null,
        notifications: [],
    },
    getters: {
        loggedIn: state => state.token !== null,
        loading: state => state.loading,
        userId: state => state.user ? state.user.id : null,
        user: state => state.user,
        role: state => state.user ? state.user.type : null,
        isSenior: state => state.user ? state.user.type === 'senior' : false,
        isClient: state => state.user ? state.user.type === 'client' : false,
        isEmployee: state => state.user ? state.user.type === 'senior' || state.user.type === 'junior' : false,
        token: state => state.token ? state.token : null,
        notifications: state => state.notifications
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },

        REMOVE_TOKEN(state) {
            state.token = null;
        },

        SET_LOADING(state, loading) {
            state.loading = loading;
        },

        SET_USER(state, user) {
            state.user = user;
        },

        ADD_NOTIFICATION(state, notification) {
            state.notifications.push(notification);
        },

        REMOVE_NOTIFICATION(state, notification) {
            state.notifications = state.notifications.filter(e => e.id !== notification.id);
        }
    },
    actions: {
        setToken({commit}, {token, expiresIn}) {
            Vue.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            const expiryTime = new Date(new Date().getTime() + expiresIn * 1000);
            Cookies.set('x-access-token', token, {expires: expiryTime});
            commit('SET_TOKEN', token);
        },

         refreshToken({dispatch}) {
            return Vue.axios.post('/api/refresh-token').then(response => {
                let payload = {
                    token: response.data.token,
                    expiresIn: response.data.expiresIn
                };
                dispatch('setToken', payload);
            });

        },

        logout({commit}) {
            delete Vue.axios.defaults.headers.common['Authorization'];
            Cookies.remove('x-access-token');
            commit('REMOVE_TOKEN');
            commit('SET_USER', null);
        },

        setLoading({commit}, {loading}) {
            commit('SET_LOADING', loading);
        },

        getUser({commit}) {
            Vue.axios.get('/api/user').then(response => {
                commit('SET_USER', response.data.data);
            });
        },

        addNotification({commit}, {notification}) {
            commit('ADD_NOTIFICATION', notification);
        },

        removeNotification({commit}, {notification}) {
            commit('REMOVE_NOTIFICATION', notification);
        }
    }
})
