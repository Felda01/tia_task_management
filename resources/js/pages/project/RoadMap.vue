<template>
    <div class="project-road-map">
        <div class="row">
            <template v-if="loading">
                <div class="col-12">
                    <content-placeholders class="mb-4" v-for="n in 3" :key="n">
                        <content-placeholders-heading  />
                        <content-placeholders-text :lines="3" />
                    </content-placeholders>
                </div>
            </template>
            <template v-else-if="project">
                <div class="col-12 mb-4">
                    <router-link :to="{ name: 'projects.show', params: { slug: project.slug } }" class="btn btn-outline-primary btn-sm">{{ $t('project.overview.back_to_project') }}</router-link>
                </div>
                <div class="col-12 mb-4 d-flex justify-content-between">
                    <h2>{{ $t('project.show.versions') }}</h2>
                    <button v-if="isSenior" class="btn btn-outline-primary btn-sm" @click="addVersionModal">{{ $t('project.version.add.btn') }}</button>
                </div>
                <div class="col-12">
                    <template v-if="project.versions && project.versions.length > 0">
                        <div class="card mb-4" v-for="(version, index) in sortedVersions" :key="version.id">
                            <div class="card-header">
                                <div class="d-flex flex-md-row flex-column justify-content-md-between align-items-md-center">
                                    <h5 class="mb-3 mb-md-0">{{ version.title }} ({{ new Date(version.end_date) | date('DD.MM.YYYY') }})</h5>
                                    <div class="d-flex justify-content-between justify-content-md-end">
                                        <button v-if="isSenior" class="btn btn-outline-primary btn-sm" @click="editVersionModal(version)">{{ $t('project.version.edit.btn') }}</button>
                                        <button v-if="isSenior" class="btn btn-outline-danger btn-sm" @click="deleteVersionModal(version)">{{ $t('project.version.delete.btn') }}</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <template v-if="version.tasks && version.tasks.length > 0">
                                    <div class="row">
                                        <div class="col-12 mb-4">
                                            <b-progress :value="doneTasksInVersion(version)" :max="100" show-progress></b-progress>
                                        </div>
                                        <div class="col-lg-6 col-12 mb-4" v-for="task in version.tasks">
                                            <router-link :to="{ name: 'tasks.show', params: { id: task.id } }" class="text-decoration-none">
                                                <div class="card h-100">
                                                    <div class="card-header">
                                                        <h5 class="mb-0">{{ task.title }}</h5>
                                                    </div>
                                                    <div class="card-body d-flex justify-content-between">
                                                        <div class="d-flex">
                                                            <div v-if="task.assignee" class="d-flex align-items-center">
                                                                <img :src="task.assignee.photo" class="avatar avatar-md mr-2" :alt="task.assignee.fullName">
                                                            </div>
                                                            <div>
                                                                <p class="mb-0">{{ new Date(task.start_date) | date('DD.MM.YYYY') }}</p>
                                                                <p class="mb-0">{{ new Date(task.end_date) | date('DD.MM.YYYY') }}</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p class="mb-0">{{ task.status | capitalize }}</p>
                                                            <p class="mb-0">{{ task.priority | capitalize }}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </router-link>
                                        </div>
                                    </div>
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
                    <template v-if="project.tasks_no_version && project.tasks_no_version.length > 0">
                        <div class="card">
                            <div class="card-header">
                                <div class="row">
                                    <div class="col">
                                        <h5 class="mb-0">No version</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg-6 col-12 mb-4" v-for="(task, index) in project.tasks_no_version" :key="'task' + task.id">
                                        <router-link :to="{ name: 'tasks.show', params: { id: task.id } }" class="text-decoration-none">
                                            <div class="card h-100">
                                                <div class="card-header">
                                                    <h5 class="mb-0">{{ task.title }}</h5>
                                                </div>
                                                <div class="card-body d-flex justify-content-between">
                                                    <div class="d-flex">
                                                        <div v-if="task.assignee" class="d-flex align-items-center">
                                                            <img :src="task.assignee.photo" class="avatar avatar-md mr-2" :alt="task.assignee.fullName">
                                                        </div>
                                                        <div>
                                                            <p class="mb-0">{{ new Date(task.start_date) | date('DD.MM.YYYY') }}</p>
                                                            <p class="mb-0">{{ new Date(task.end_date) | date('DD.MM.YYYY') }}</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p class="mb-0">{{ task.status | capitalize }}</p>
                                                        <p class="mb-0">{{ task.priority | capitalize }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>

                <!-- Modal Add Version -->
                <custom-modal ref="addVersionModal" @ok="addVersion" :modalSchema="modalSchemaAddVersion" />

                <!-- Modal Edit Version -->
                <custom-modal ref="editVersionModal" @ok="editVersion" :modalSchema="modalSchemaEditVersion" />
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
        name: "RoadMap",
        computed: {
            sortedVersions() {
                if (this.project && this.project.versions) {
                    return _.orderBy(this.project.versions, 'end_date', 'asc');
                }
            },
            ...mapGetters([
                'isSenior',
                'userId',
            ]),
        },
        data() {
            return {
                project: null,
                loading: false,
                errorCode: 0,
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
                },
                removeVersionMessageBoxOptions: {
                    title: this.$t('modalWarning'),
                    okVariant: 'success',
                    cancelVariant: 'danger',
                },
            }
        },
        created() {
            this.fetchData();
        },
        methods: {
            fetchData() {
                this.loading = true;
                this.axios.get('/api/projects/' + this.$route.params.slug + "/roadmap").then((response) => {
                    this.project = response.data.data;
                    this.loading = false;
                }).catch(error => {
                    this.errorCode = error.response.status;
                    this.loading = false;
                });
            },
            sortedArray(array, field){
                return array.sort((a, b) => a[field] - b[field]);
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
                this.$bvModal.msgBoxConfirm(this.$t('version.removeMessage'), this.removeVersionMessageBoxOptions).then(value => {
                    if (value) {
                        this.axios.delete('/api/versions/' + version.id).then(response => {

                            this.task.timeTracking = _.filter(this.task.timeTracking, function(timeElement) {
                                return timeElement.id !== time.id;
                            });
                        });
                    }
                });
            },
            doneTasksInVersion(version) {
                let count = 0;

                for (let i = 0; i < version.tasks.length; i++) {
                    if (version.tasks[i].status === 'completed') {
                        count += 1;
                    }
                }

                return count / version.tasks.length * 100;
            }
        }
    }
</script>
