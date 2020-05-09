<template>
    <div class="client-list">
        <div class="row">
            <template v-if="loading">
                <div class="col-12">
                    <content-placeholders class="mb-4">
                        <content-placeholders-heading />
                    </content-placeholders>
                </div>
                <div class="col-lg-4 col-md-6 col-12" v-for="n in 12" >
                    <content-placeholders class="mb-4">
                        <content-placeholders-heading />
                        <content-placeholders-text :lines="3" />
                    </content-placeholders>
                </div>
            </template>
            <template v-else-if="clients">
                <div class="col-12 mb-4 d-flex justify-content-between">
                    <h1>{{ $t('client_list.clients') }}</h1>
                    <button v-if="isSenior" class="btn btn-outline-primary" @click="addClientModal">{{ $t('client_list.add.client.btn') }}</button>
                </div>
                <template v-if="clients.length > 0">
                    <div class="col-lg-4 col-md-6 col-12 mb-4" v-for="client in clients" >
                        <router-link :to="{ name: 'clients.show', params: { id: client.id } }" class="text-decoration-none">
                            <div class="card h-100">
                                <div class="card-header">
                                    <h5 class="mb-0"><span :class="'badge badge-' + badgeType(client.type) + ' text-uppercase mr-2'">{{ client.type }}</span>{{ client.name }}</h5>
                                </div>
                                <div class="card-body">
                                    <p class="font-weight-bold text-decoration-none text-black-50 mb-1">Projects:</p>
                                    <template v-if="client.projects && client.projects.length > 0">
                                        <template v-for="project in client.projects">
                                            <router-link class="text-decoration-none d-block" :to="{ name: 'projects.show', params: {slug: project.slug} }">{{ project.slug }}: {{ project.title }}</router-link>
                                        </template>
                                    </template>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </template>
                <template v-else>
                    <div class="col-12">
                        <p>{{ $t('client.no_clients') }}</p>
                    </div>
                </template>

                <!-- Modal Add Client -->
                <custom-modal ref="addClientModal" @ok="addClient" :modalSchema="modalSchemaAddClient" />
            </template>
            <template v-else-if="errorCode === 403">
                <div class="col-12">
                    <error-forbidden />
                </div>
            </template>
            <template v-else-if="errorCode === 404">
                <div class="col-12">
                    <error-not-found />
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "ClientList",
        computed: {
            ...mapGetters([
                'isSenior'
            ]),
        },
        data() {
            return {
                loading: false,
                clients: null,
                clientTypeOptions: [],
                modalSchemaAddClient: {
                    form: {
                        url: '/api/clients',
                        method: 'post',
                        fields: [],
                        hiddenFields: [],
                        config: {}
                    },
                    modalRef: 'addClient',
                    modalTitle: this.$t('client.add.title'),
                    okBtnTitle: this.$t('modal.add.btn')
                },
                errorCode: 0,
            }
        },
        created () {
            this.fetchData();
        },
        methods: {
            fetchData() {
                this.loading = true;
                this.axios.get('/api/clients').then(response => {
                    this.clients = response.data.data;
                    this.links = response.data.links;
                    this.meta = response.data.meta;
                    this.clientTypeOptions = response.data.meta.clientTypeOptions;
                    this.loading = false;
                }).catch(error => {
                    this.errorCode = error.response.status;
                    this.loading = false;
                });
            },
            badgeType(type) {
                switch (type) {
                    case 'A':
                        return 'danger';
                    case 'B':
                        return 'primary';
                    default:
                        return 'success';
                }
            },
            addClient(response) {
                let newClient = response.data.data;
                this.$router.push({ name: 'clients.show', params: {id: newClient.id} });
            },
            addClientModal() {
                this.modalSchemaAddClient.form.fields = [
                    {
                        label: this.$t('client.name'),
                        required: true,
                        name: 'name',
                        input: 'text',
                        type: 'text',
                        value: '',
                        config: {}
                    },
                    {
                        label: this.$t('client.type'),
                        required: true,
                        name: 'type',
                        input: 'select',
                        type: 'select',
                        value: 'B',
                        config: {
                            options: this.clientTypeOptions
                        }
                    },
                    {
                        label: this.$t('user.email'),
                        required: true,
                        name: 'email',
                        input: 'text',
                        type: 'email',
                        value: '',
                        config: {}
                    },
                    {
                        label: this.$t('user.first_name'),
                        required: true,
                        name: 'first_name',
                        input: 'text',
                        type: 'text',
                        value: '',
                        config: {}
                    },
                    {
                        label: this.$t('user.last_name'),
                        required: true,
                        name: 'last_name',
                        input: 'text',
                        type: 'text',
                        value: '',
                        config: {}
                    },
                ];

                this.$refs['addClientModal'].openModal();
            },
        },
    }
</script>
