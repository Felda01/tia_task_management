<template>
    <div class="client-detail">
        <div class="row">
            <template v-if="loading">
                <div class="col-md-4 col-12">
                    <content-placeholders class="mb-4">
                        <content-placeholders-heading :img="true" />
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
                <div class="col-md-4 col-12 mb-4">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="mb-0"><span :class="'badge badge-' + badgeType(client.type) + ' text-uppercase mr-2'">{{ client.type }}</span>{{ client.name }}</h3>
                        </div>
                        <div class="card-body">
                            <template v-if="client.user">
                                <p class="font-weight-bold">{{ $t('client.show.contact') }}</p>
                                <div class="d-flex mb-4">
                                    <div class="pr-2" v-if="client.user.photo">
                                        <img :src="client.user.photo" class="avatar avatar-md" :alt="client.user.fullName">
                                    </div>
                                    <div>
                                        <p class="mb-1">{{ client.user.fullName }}</p>
                                        <a :href="'mailto:' + client.user.email">{{ client.user.email }}</a>
                                    </div>
                                </div>
                            </template>
                            <div class="row">
                                <div class="col">
                                    <button class="btn btn-outline-primary btn-sm" @click="editClientModal">{{ $t('client.edit.btn') }}</button>
                                    <button v-if="client.user" class="btn btn-outline-primary btn-sm" @click="editClientUserModal">{{ $t('client.edit.user.btn') }}</button>
                                </div>
                            </div>
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
                                    <button class="btn btn-outline-primary btn-sm" @click="addProjectModal">{{ $t('client.project.add.btn') }}</button>
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

                <!-- Modal edit Client -->
                <b-modal ref="editClient" :title="$t('client.edit.title')"
                         @show="resetEditClientModal"
                         @hidden="resetEditClientModal"
                         @ok="editClient">
                    <form @keydown="formClient.onKeydown($event)" enctype="multipart/form-data">
                        <!-- Alert -->
                        <alert-error :form="formClient"></alert-error>

                        <!-- Name -->
                        <div class="form-group">
                            <label>{{ $t('client.name') }} *</label>
                            <div>
                                <input v-model="formClient.name" :class="{ 'is-invalid': formClient.errors.has('name') }" class="form-control" type="text" name="name">
                                <has-error :form="formClient" field="name" />
                            </div>
                        </div>

                        <!-- Type -->
                        <div class="form-group">
                            <label>{{ $t('client.type') }} *</label>
                            <b-form-select v-model="formClient.type" :options="clientTypeOptions" :class="{ 'is-invalid': formClient.errors.has('type') }" class="form-control" />
                            <has-error :form="formClient" field="type" />
                        </div>
                    </form>
                    <template v-slot:modal-footer="{ ok, cancel }">
                        <button :disabled="formClient.busy" class="btn btn-primary" @click="ok()">
                            <span v-if="formClient.busy" class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
                            {{ $t('modal.edit.btn')}}
                        </button>
                        <button class="btn btn-danger" @click="cancel()">{{ $t('cancel')}}</button>
                    </template>
                </b-modal>

                <!-- Modal Edit Client User -->
                <b-modal ref="editClientUser" :title="$t('client.edit.user.title')"
                         @show="resetEditClientUserModal"
                         @hidden="resetEditClientUserModal"
                         @ok="editClientUser">
                    <form @keydown="formClientUser.onKeydown($event)" enctype="multipart/form-data">
                        <!-- Alert -->
                        <alert-error :form="formClientUser"></alert-error>

                        <!-- Client - Email -->
                        <div class="form-group">
                            <label>{{ $t('client.user.email') }} *</label>
                            <div>
                                <input v-model="formClientUser.email" :class="{ 'is-invalid': formClientUser.errors.has('email') }" class="form-control" type="email" name="email">
                                <has-error :form="formClientUser" field="email" />
                            </div>
                        </div>

                        <!-- Client - First name -->
                        <div class="form-group">
                            <label>{{ $t('client.user.first_name') }} *</label>
                            <div>
                                <input v-model="formClientUser.first_name" :class="{ 'is-invalid': formClientUser.errors.has('first_name') }" class="form-control" type="text" name="first_name">
                                <has-error :form="formClientUser" field="first_name" />
                            </div>
                        </div>

                        <!-- Client - Last name -->
                        <div class="form-group">
                            <label>{{ $t('client.user.last_name') }} *</label>
                            <div>
                                <input v-model="formClientUser.last_name" :class="{ 'is-invalid': formClientUser.errors.has('last_name') }" class="form-control" type="text" name="last_name">
                                <has-error :form="formClientUser" field="last_name" />
                            </div>
                        </div>
                    </form>
                    <template v-slot:modal-footer="{ ok, cancel }">
                        <button :disabled="formClientUser.busy" class="btn btn-primary" @click="ok()">
                            <span v-if="formClientUser.busy" class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
                            {{ $t('modal.edit.btn')}}
                        </button>
                        <button class="btn btn-danger" @click="cancel()">{{ $t('cancel')}}</button>
                    </template>
                </b-modal>

                <!-- Modal Project -->
                <b-modal ref="addProject" :title="$t('client.project.add.title.modal')"
                         @show="resetAddProjectModal"
                         @hidden="resetAddProjectModal"
                         @ok="addProject">
                    <form @keydown="formProject.onKeydown($event)" enctype="multipart/form-data">
                        <!-- Alert -->
                        <alert-error :form="formProject"></alert-error>

                        <!-- Title -->
                        <div class="form-group">
                            <label>{{ $t('project.title') }} *</label>
                            <div>
                                <input v-model="formProject.title" :class="{ 'is-invalid': formProject.errors.has('title') }" class="form-control" type="text" name="title">
                                <has-error :form="formProject" field="title" />
                            </div>
                        </div>

                        <!-- Shortcode -->
                        <div class="form-group">
                            <label>{{ $t('project.slug') }} *</label>
                            <div>
                                <input v-model="formProject.slug" :class="{ 'is-invalid': formProject.errors.has('slug') }" class="form-control" type="text" name="slug">
                                <has-error :form="formProject" field="slug" />
                            </div>
                        </div>

                        <!-- Start date -->
                        <div class="form-group">
                            <label>{{ $t('project.start_date') }} *</label>
                            <div>
                                <b-form-datepicker v-model="formProject.start_date" :class="{ 'is-invalid': formProject.errors.has('start_date') }" class="form-control"></b-form-datepicker>
                                <has-error :form="formProject" field="start_date" />
                            </div>
                        </div>

                        <!-- End date -->
                        <div class="form-group">
                            <label>{{ $t('project.end_date') }}</label>
                            <div>
                                <b-form-datepicker v-model="formProject.end_date" :class="{ 'is-invalid': formProject.errors.has('end_date') }" class="form-control"></b-form-datepicker>
                                <has-error :form="formProject" field="end_date" />
                            </div>
                        </div>
                    </form>
                    <template v-slot:modal-footer="{ ok, cancel }">
                        <button :disabled="formProject.busy" class="btn btn-primary" @click="ok()">
                            <span v-if="formProject.busy" class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
                            {{ $t('modal.add.btn')}}
                        </button>
                        <button class="btn btn-danger" @click="cancel()">{{ $t('cancel')}}</button>
                    </template>
                </b-modal>
            </template>
        </div>
    </div>
</template>

<script>
    import Form from 'vform';

    export default {
        name: "ClientDetail",
        data() {
            return {
                client: null,
                loading: false,
                formClient: null,
                formClientUser: null,
                clientTypeOptions: [
                    { text: 'A', value: 'a' },
                    { text: 'B', value: 'b' },
                    { text: 'C', value: 'c' },
                ],
                formProject: new Form({
                    'start_date': '',
                    'end_date': null,
                    'slug': '',
                    'title': '',
                    'client_id': ''
                }),
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
                    this.loading = false;
                    this.formClient = new Form({
                        'name': this.client.name,
                        'type': this.client.type,
                    });
                    this.formClientUser = new Form({
                        'email': this.client.email,
                        'first_name': this.client.first_name,
                        'last_name': this.client.last_name,
                    });
                });
            },
            badgeType(type) {
                switch (type) {
                    case 'a':
                        return 'danger';
                    case 'b':
                        return 'primary';
                    default:
                        return 'success';
                }
            },
            editClient(bvModalEvt) {
                bvModalEvt.preventDefault();

                this.formClient.put('/api/clients/' + this.$route.params.id).then(response => {
                    this.client.name = response.data.data.name;
                    this.client.type = response.data.data.type;

                    this.formClient = new Form({
                        'name': this.client.name,
                        'type': this.client.type,
                    });

                    this.$nextTick(() => {
                        this.$refs['editClient'].hide();
                    });
                });
            },
            editClientModal() {
                this.$refs['editClient'].show();
            },
            resetEditClientModal() {
                if (this.formClient) {
                    this.formClient.reset();
                }
            },
            editClientUser(bvModalEvt) {
                bvModalEvt.preventDefault();

                this.formClientUser.put('/api/users/' + this.client.user.id).then(response => {
                    this.client.email = response.data.data.email;
                    this.client.first_name = response.data.data.first_name;
                    this.client.last_name = response.data.data.last_name;

                    this.formClientUser = new Form({
                        'email': this.client.email,
                        'first_name': this.client.first_name,
                        'last_name': this.client.last_name,
                    });

                    this.$nextTick(() => {
                        this.$refs['editClientUser'].hide();
                    });
                });

            },
            editClientUserModal() {
                this.$refs['editClientUser'].show();
            },
            resetEditClientUserModal() {
                if (this.formClientUser) {
                    this.formClientUser.reset();
                }
            },
            addProject(bvModalEvt) {
                bvModalEvt.preventDefault();

                this.formProject.client_id = this.client.id;

                this.formProject.post('/api/projects').then(response => {
                    let newProject = response.data.data;
                    console.log(response);
                    this.$router.push({ name: 'projects.show', params: {slug: newProject.slug} });
                });
            },
            addProjectModal() {
                this.$refs['addProject'].show();
            },
            resetAddProjectModal() {
                if (this.formProject) {
                    this.formProject.reset();
                }
            }

        }
    }
</script>
