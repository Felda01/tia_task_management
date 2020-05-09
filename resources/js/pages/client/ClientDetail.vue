<template>
    <div class="client-detail">
        <div class="row">
            <template v-if="loading">
                <div class="col-12">
                    <content-placeholders class="mb-4">
                        <content-placeholders-heading :img="true" />
                    </content-placeholders>
                </div>
                <div class="col-md-4 col-12">
                    <content-placeholders class="mb-4">
                        <content-placeholders-heading  />
                        <content-placeholders-text :lines="4" />
                    </content-placeholders>
                </div>
                <div class="col-md-8 col-12">
                    <content-placeholders class="mb-4">
                        <content-placeholders-heading  />
                        <content-placeholders-text :lines="8" />
                    </content-placeholders>
                </div>
            </template>
            <template v-else-if="client">
                <div class="col-12 mb-4 d-flex justify-content-between">
                    <h1><span :class="'badge badge-' + badgeType(client.type) + ' text-uppercase mr-2'">{{ client.type }}</span>{{ client.name }}</h1>
                    <button v-if="isSenior" class="btn btn-outline-primary" @click="editClientModal">{{ $t('client.edit.btn') }}</button>
                </div>
                <div class="col-md-4 col-12 mb-4">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5 class="mb-0">{{ $t('client.show.contact') }}</h5>
                            <button v-if="client.user && isSenior" class="btn btn-outline-primary btn-sm" @click="editClientUserModal">{{ $t('client.edit.user.btn') }}</button>
                        </div>
                        <div class="card-body">
                            <template v-if="client.user">
                                <div class="d-flex">
                                    <div class="pr-2" v-if="client.user.photo">
                                        <img :src="client.user.photo" class="avatar avatar-md" :alt="client.user.fullName">
                                    </div>
                                    <div>
                                        <p class="mb-1">{{ client.user.fullName }}</p>
                                        <a :href="'mailto:' + client.user.email">{{ client.user.email }}</a>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 col-12 mb-4">
                    <div class="card">
                        <div class="card-header">
                            <div class="row">
                                <div class="col d-flex align-items-center">
                                    <h5 class="mb-0">{{ $t('client.show.projects') }}</h5>
                                </div>
                                <div class="col text-right">
                                    <button v-if="isSenior" class="btn btn-outline-primary btn-sm" @click="addProjectModal">{{ $t('client.project.add.btn') }}</button>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <template v-if="client.projects && client.projects.length > 0">
                                <router-link :to="{ name: 'projects.show', params: { slug: project.slug } }" class="text-decoration-none d-block" :class="{'mb-2': index < client.projects.length - 1}" v-for="(project, index) in client.projects" :key="project.id">{{ project.slug }}: {{ project.title }}</router-link>
                            </template>
                            <template v-else>
                                {{ $t('client.project.no_projects')}}
                            </template>
                        </div>
                    </div>
                </div>

                <!-- Modal Edit Client -->
                <custom-modal ref="editClientModal" @ok="editClient" :modalSchema="modalSchemaEditClient" />

                <!-- Modal Edit Client User -->
                <custom-modal ref="editClientUserModal" @ok="editClientUser" :modalSchema="modalSchemaEditClientUser" />

                <!-- Modal Project -->
                <custom-modal ref="addProjectModal" @ok="addProject" :modalSchema="modalSchemaAddProject" />
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
        name: "ClientDetail",
        computed: {
            ...mapGetters([
                'isSenior'
            ]),
        },
        data() {
            return {
                client: null,
                loading: false,
                errorCode: 0,
                clientTypeOptions: [],
                modalSchemaEditClient: {
                    form: {
                        url: '/api/clients/' + this.$route.params.id,
                        method: 'put',
                        fields: [],
                        hiddenFields: [],
                        config: {}
                    },
                    modalRef: 'editClient',
                    modalTitle: this.$t('client.edit.title'),
                    okBtnTitle: this.$t('modal.edit.btn')
                },
                modalSchemaEditClientUser: {
                    form: {
                        url: '',
                        method: 'put',
                        fields: [],
                        hiddenFields: [],
                        config: {}
                    },
                    modalRef: 'editClientUser',
                    modalTitle: this.$t('client.edit.user.title'),
                    okBtnTitle: this.$t('modal.edit.btn')
                },
                modalSchemaAddProject: {
                    form: {
                        url: '/api/projects',
                        method: 'post',
                        fields: [
                            {
                                label: this.$t('project.title'),
                                required: true,
                                name: 'title',
                                input: 'text',
                                type: 'text',
                                value: '',
                                config: {}
                            },
                            {
                                label: this.$t('project.slug'),
                                required: true,
                                name: 'slug',
                                input: 'text',
                                type: 'text',
                                value: '',
                                config: {}
                            },
                            {
                                label: this.$t('project.start_date'),
                                required: true,
                                name: 'start_date',
                                input: 'date',
                                type: 'date',
                                value: '',
                                config: {}
                            },
                            {
                                label: this.$t('project.end_date'),
                                required: false,
                                name: 'end_date',
                                input: 'date',
                                type: 'date',
                                value: '',
                                config: {}
                            }
                        ],
                        hiddenFields: [],
                        config: {}
                    },
                    modalRef: 'addProject',
                    modalTitle: this.$t('client.project.add.title.modal'),
                    okBtnTitle: this.$t('modal.add.btn')
                }
            }
        },
        created() {
            this.fetchData();
        },
        methods: {
            fetchData() {
                this.loading = true;
                this.axios.get('/api/clients/' + this.$route.params.id).then((response) => {
                    this.client = response.data.data;
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
            editClientModal() {
                this.modalSchemaEditClient.form.fields = [
                    {
                        label: this.$t('client.name'),
                        required: true,
                        name: 'name',
                        input: 'text',
                        type: 'text',
                        value: this.client.name,
                        config: {}
                    },
                    {
                        label: this.$t('client.type'),
                        required: true,
                        name: 'type',
                        input: 'select',
                        type: 'select',
                        value: this.client.type,
                        config: {
                            options: this.clientTypeOptions
                        }
                    },
                ];

                this.$refs['editClientModal'].openModal();
            },
            editClient(response) {
                this.client = response.data.data;
            },
            editClientUserModal() {
                this.modalSchemaEditClientUser.form.url = '/api/users/' + this.client.user.id;

                this.modalSchemaEditClientUser.form.fields = [
                    {
                        label: this.$t('user.email'),
                        required: true,
                        name: 'email',
                        input: 'text',
                        type: 'email',
                        value: this.client.user.email,
                        config: {}
                    },
                    {
                        label: this.$t('user.first_name'),
                        required: true,
                        name: 'first_name',
                        input: 'text',
                        type: 'text',
                        value: this.client.user.first_name,
                        config: {}
                    },
                    {
                        label: this.$t('user.last_name'),
                        required: true,
                        name: 'last_name',
                        input: 'text',
                        type: 'text',
                        value: this.client.user.last_name,
                        config: {}
                    },
                ];

                this.$refs['editClientUserModal'].openModal();
            },
            editClientUser(response) {
                this.client.user = response.data.data;
            },
            addProjectModal() {
                this.modalSchemaAddProject.form.hiddenFields = [
                    { name: 'client_id', value: this.client.id },
                ];

                this.$refs['addProjectModal'].openModal();
            },
            addProject(response) {
                let newProject = response.data.data;
                this.$router.push({ name: 'projects.show', params: {slug: newProject.slug} });
            },
        }
    }
</script>
