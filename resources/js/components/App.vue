<template>
    <div class="app">
        <b-navbar toggleable="md" type="dark" variant="primary">
            <div class="container">
                <b-navbar-brand>TMT</b-navbar-brand>
                <b-navbar-toggle target="nav-collapse" v-if="loggedIn"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav v-if="loggedIn">
                    <b-navbar-nav>
                        <b-nav-item :to="{ name: 'clients'}" >Clients</b-nav-item>
                    </b-navbar-nav>

                    <b-navbar-nav class="ml-auto">
                        <button class="btn btn-link nav-link" @click="logout">{{ $t('logout')}}</button>
                    </b-navbar-nav>
                </b-collapse>
            </div>
        </b-navbar>
        <div class="container mt-5">
            <b-overlay :show="loading" no-wrap spinner-variant="primary"></b-overlay>
            <router-view v-if="!loading"></router-view>
        </div>
    </div>

</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "App",
        computed: mapGetters({
            loggedIn: 'loggedIn',
            loading: 'loading'
        }),
        methods: {
            logout() {
                this.axios.post('/api/logout')
                    .then(resp => {
                        this.$store.dispatch('logout').then(() => {
                            this.$router.push({ name: 'login' });
                        });
                    })
                    .catch(errors => {

                    });
            }
        }
    }
</script>
