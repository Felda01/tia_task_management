<template>
    <div class="app">
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <div class="container">
                <b-navbar-brand v-if="loggedIn" :to="{ name: 'dashboard'}">TMT</b-navbar-brand>
                <b-navbar-brand v-else :to="{ name: 'login'}">TMT</b-navbar-brand>
                <b-navbar-toggle target="nav-collapse" v-if="loggedIn"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav v-if="loggedIn">
                    <b-navbar-nav>
                        <template v-if="userId && isClient">
                            <b-nav-item :to="{ name: 'clients.show', params: { id: user.client.id }}" >{{ user.client.name }}</b-nav-item>
                        </template>
                        <template v-else-if="userId && !isClient">
                            <b-nav-item :to="{ name: 'clients'}" >{{ $t('navigation.clients') }}</b-nav-item>
                            <b-nav-item :to="{ name: 'tasks'}" >{{ $t('navigation.tasks') }}</b-nav-item>
                            <b-nav-item :to="{ name: 'users'}" >{{ $t('navigation.users') }}</b-nav-item>
                        </template>
                    </b-navbar-nav>

                    <b-navbar-nav class="ml-auto">
                        <b-nav-item v-if="userId" :to="{ name: 'users.show', params: { id: userId } }"><span><img :src="user.photo" class="avatar avatar-sm mr-2" :alt="user.fullName"></span>{{ user.fullName }}</b-nav-item>
                        <b-nav-item @click="logout">{{ $t('logout')}}</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </div>
        </b-navbar>
        <div id="content">
            <div class="container mt-lg-5">
                <b-overlay :show="loading" no-wrap spinner-variant="primary"></b-overlay>
                <router-view v-if="!loading"></router-view>
            </div>
        </div>
        <footer class="mt-3">
            <div class="container">
                <div class="row">
                    <div class="col text-center">
                        <p>Copyright &copy; 2020</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>

</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "App",
        computed: {
            ...mapGetters([
                'loggedIn',
                'loading',
                'user',
                'isClient',
                'userId'
            ]),
        },
        created() {
            window.Echo.channel('task_management_tool_database_notification').listen('.notification.created', (data) => {
                if (this.userId && this.userId === data.user.id) {
                    this.$bvToast.toast(data.task.project.slug + ': ' + data.task.title, {
                        title: data.message,
                        autoHideDelay: 10000,
                        appendToast: true,
                        variant: 'primary',
                        to: { name: 'tasks.show', params: {id: data.task.id} }
                    });
                }
            });
        },
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
