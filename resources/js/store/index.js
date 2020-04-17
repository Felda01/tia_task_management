import Vue from 'vue';
import Vuex from 'vuex';
import Cookies from 'js-cookie';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: null,
        loading: false
    },
    getters: {
        loggedIn: state => state.token !== null,
        loading: state => state.loading
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
        },

        setLoading({commit}, {loading}) {
            commit('SET_LOADING', loading);
        }
    }
})
