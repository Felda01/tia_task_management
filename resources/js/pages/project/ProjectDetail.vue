<template>
    <div class="project-detail">
        <div class="row">
            <template v-if="loading">
                <div class="col-sm-4 col-12">
                    <content-placeholders class="mb-4">
                        <content-placeholders-heading />
                        <content-placeholders-text :lines="3" />
                    </content-placeholders>
                    <content-placeholders class="mb-4">
                        <content-placeholders-heading />
                        <content-placeholders-text :lines="3" />
                    </content-placeholders>
                </div>
                <div class="col-sm-8 col-12">
                    <content-placeholders class="mb-4" v-for="n in 3" :key="n">
                        <content-placeholders-heading  />
                        <content-placeholders-text :lines="3" />
                    </content-placeholders>
                </div>
            </template>
            <template v-else-if="project">
                <div class="col-md-4 col-12">
                    <div class="card mb-4">
                        <div class="card-header">
                            <h5 class="mb-0">{{ project.slug }}: {{ project.title }}</h5>
                        </div>
                        <div class="card-body">
                            <p class="mb-1"><strong>{{ $t('project.client.name') }}:</strong> <router-link class="text-decoration-none" :to="{ name: 'clients.show', params: {id: project.client.id} }">{{ project.client.name }}</router-link></p>


                            <p class="mb-1"><strong>{{ $t('project.status') }}:</strong> {{ project.status }}</p>
                            <p class="mb-1"><strong>{{ $t('project.start_date') }}:</strong> {{ new Date(project.start_date) | date('DD.MM.YYYY') }}</p>
                            <p><strong>{{ $t('project.end_date') }}:</strong> <template v-if="project.end_date">{{ new Date(project.end_date) | date('DD.MM.YYYY') }}</template><template v-else>-</template></p>


                            <div class="row">
                                <div class="col">
                                    <button class="btn btn-outline-primary btn-sm" @click="editProjectModal">{{ $t('project.edit.btn') }}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0">{{ $t('project.team') }}</h5>
                        </div>
                        <div class="card-body">
                            <div class="d-flex" :class="{'mb-2': index < project.users.length - 1}" v-for="(user, index) in project.users" :key="user.id">
                                <div class="pr-2 d-flex" v-if="user.photo">
                                    <img :src="user.photo" class="avatar avatar-sm" :alt="user.fullName">
                                </div>
                                <div class="d-flex align-items-center">
                                    <p class="mb-0">{{ user.fullName }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 col-12">
                    <div class="card">
                        <div class="card-header">
                            <div class="row">
                                <div class="col d-flex align-items-center">
                                    <h5 class="mb-0">{{ $t('project.show.versions') }}</h5>
                                </div>
                                <div class="col text-right">
                                    <button class="btn btn-outline-primary btn-sm" @click="addVersionModal">{{ $t('project.version.add.btn') }}</button>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <template v-if="project.versions && project.versions.length > 0">
                                <div class="card" v-for="(version, index) in sortedVersions" :key="version.id" :class="{'mb-4': index < project.versions.length - 1}">
                                    <div class="card-header">
                                        <div class="row">
                                            <div class="col d-flex align-items-center">
                                                <h5 class="mb-0">{{ version.title }} ({{ new Date(version.end_date) | date('DD.MM.YYYY') }})</h5>
                                            </div>
                                            <div class="col text-right">
                                                <button class="btn btn-outline-primary btn-sm" @click="editVersionModal(version)">{{ $t('project.version.edit.btn') }}</button>
                                                <button class="btn btn-outline-danger btn-sm" @click="deleteVersionModal(version)">{{ $t('project.version.delete.btn') }}</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <template v-if="version.tasks && version.tasks.length > 0">

                                        </template>
                                        <template v-else>
                                            {{ $t('version.task.no_tasks')}}
                                        </template>
                                    </div>
                                </div>
                            </template>
                            <template v-else>
                                {{ $t('project.version.no_versions')}}
                            </template>
                        </div>
                    </div>
                </div>
            </template>

            <custom-modal ref="editProjectModal" @ok="editProject" :modalSchema="modalSchemaEditProject" />
            <custom-modal ref="addVersionModal" @ok="addVersion" :modalSchema="modalSchemaAddVersion" />
            <custom-modal ref="editVersionModal" @ok="editVersion" :modalSchema="modalSchemaEditVersion" />
        </div>
    </div>
</template>

<script>
    import Form from 'vform';

    export default {
        name: "ProjectDetail",
        computed: {
            sortedVersions() {
                if (this.project && this.project.versions) {
                    return _.orderBy(this.project.versions, 'end_date', 'asc');
                }
            }
        },
        data() {
            return {
                project: null,
                loading: false,

                formEditProject: new Form({
                    'start_date': '',
                    'end_date': null,
                    'slug': '',
                    'title': '',
                    'client_id': ''
                }),
                modalSchemaEditProject: {
                    form: {
                        url: '/api/projects/' + this.$route.params.slug,
                        method: 'put',
                        fields: [],
                        hiddenFields: [],
                        config: {}
                    },
                    modalRef: 'editProject',
                    modalTitle: this.$t('project.edit.title.modal'),
                    okBtnTitle: this.$t('modal.edit.btn')
                },
                modalSchemaAddVersion: {
                    form: {
                        url: '/api/versions',
                        method: 'post',
                        fields: [
                            {
                                label: this.$t('version.title'),
                                required: true,
                                name: 'title',
                                input: 'text',
                                type: 'text',
                                value: '',
                                config: {}
                            },
                            {
                                label: this.$t('version.end_date'),
                                required: true,
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
                    modalRef: 'addVersion',
                    modalTitle: this.$t('project.version.add.title.modal'),
                    okBtnTitle: this.$t('modal.add.btn')
                },
                modalSchemaEditVersion: {
                    form: {
                        url: '',
                        method: 'put',
                        fields: [

                        ],
                        hiddenFields: [],
                        config: {}
                    },
                    modalRef: 'editVersion',
                    modalTitle: this.$t('project.version.edit.title.modal'),
                    okBtnTitle: this.$t('modal.edit.btn')
                }
            }
        },
        created() {
            this.fetchData();
        },
        methods: {
            fetchData() {
                this.loading = true;
                this.axios.get('/api/projects/' + this.$route.params.slug).then((response) => {
                    this.project = response.data.data;
                    this.loading = false;
                });
            },
            sortedArray(array, field){
                return array.sort((a, b) => a[field] - b[field]);
            },
            editProjectModal() {
                this.modalSchemaEditProject.form.fields = [
                    {
                        label: this.$t('project.title'),
                        required: true,
                        name: 'title',
                        input: 'text',
                        type: 'text',
                        value: this.project.title,
                        config: {}
                    },
                    {
                        label: this.$t('project.status'),
                        required: true,
                        name: 'status',
                        input: 'select',
                        type: 'text',
                        value: this.project.status,
                        config: {
                            options: [
                                {text: 'Active', value: 'active'},
                                {text: 'Finished', value: 'finished'},
                                {text: 'Closed', value: 'closed'},
                            ]
                        }
                    },
                    {
                        label: this.$t('project.start_date'),
                        required: true,
                        name: 'start_date',
                        input: 'date',
                        type: 'date',
                        value: this.project.start_date,
                        config: {}
                    },
                    {
                        label: this.$t('project.end_date'),
                        required: false,
                        name: 'end_date',
                        input: 'date',
                        type: 'date',
                        value: this.project.end_date,
                        config: {}
                    }
                ];
                this.$refs['editProjectModal'].openModal();
            },
            editProject(response) {
                this.project = response.data.data;
            },
            addVersionModal() {
                this.modalSchemaAddVersion.form.hiddenFields = [
                    {name: 'project_id', value: this.project.id}
                ];

                this.$refs['addVersionModal'].openModal();
            },
            addVersion(response) {
                if (!this.project.versions) {
                    this.project.versions = [];
                }

                this.project.versions.push(response.data.data);
            },
            editVersionModal(version) {
                this.modalSchemaEditVersion.form.url = '/api/versions/' + version.id;
                this.modalSchemaEditVersion.form.fields = [
                    {
                        label: this.$t('version.title'),
                        required: true,
                        name: 'title',
                        input: 'text',
                        type: 'text',
                        value: version.title,
                        config: {}
                    },
                    {
                        label: this.$t('version.end_date'),
                        required: true,
                        name: 'end_date',
                        input: 'date',
                        type: 'date',
                        value: version.end_date,
                        config: {}
                    }
                ];

                this.$refs['editVersionModal'].openModal();
            },
            editVersion(response) {
                let version = response.data.data;
                let index = this.project.versions.findIndex(item => item.id === version.uid);
                this.project.versions.splice(index, 1, version);
            },
            deleteVersionModal(version) {
                //
            }
        }
    }
</script>
