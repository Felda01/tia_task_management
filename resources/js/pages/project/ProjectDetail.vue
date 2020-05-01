<template>
    <div class="project-detail">
        <div class="row">
            <template v-if="loading">
                <div class="col-12">
                    <content-placeholders class="mb-4">
                        <content-placeholders-heading />
                    </content-placeholders>
                </div>
                <div class="col-lg-4 col-md-6 col-12">
                    <content-placeholders class="mb-4">
                        <content-placeholders-heading />
                        <content-placeholders-text :lines="3" />
                    </content-placeholders>
                    <content-placeholders class="mb-4">
                        <content-placeholders-heading />
                        <content-placeholders-text :lines="3" />
                    </content-placeholders>
                </div>
                <div class="col-lg-8 col-12">
                    <content-placeholders class="mb-4" v-for="n in 3" :key="n">
                        <content-placeholders-heading  />
                        <content-placeholders-text :lines="3" />
                    </content-placeholders>
                </div>
            </template>
            <template v-else-if="project">
                <div class="col-12 mb-4 d-flex justify-content-between">
                    <h1>{{ project.slug }}: {{ project.title }}</h1>
                    <button class="btn btn-outline-primary" @click="editProjectModal">{{ $t('project.edit.btn') }}</button>
                </div>
                <div class="col-lg-4 col-12">
                    <div class="card mb-4">
                        <div class="card-header">
                            <h5 class="mb-0">{{ $t('project.show.details') }}</h5>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-4 col-md-5">{{ $t('project.client.name') }}:</div>
                                <div class="col-lg-8 col-md-7"><router-link :to="{ name: 'clients.show', params: { id: project.client.id } }" class="text-decoration-none">{{ project.client.name }}</router-link></div>
                            </div>
                            <div class="row">
                                <div class="col-lg-4">{{ $t('project.status') }}:</div>
                                <div class="col-lg-8 col-md-7">{{ project.status }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-4">
                        <div class="card-header">
                            <h5 class="mb-0">{{ $t('project.show.dates') }}</h5>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-4 col-md-5">{{ $t('project.start_date') }}:</div>
                                <div class="col-lg-8 col-md-7">{{ new Date(project.start_date) | date('DD.MM.YYYY') }}</div>
                            </div>
                            <div class="row">
                                <div class="col-lg-4 col-md-5">{{ $t('project.end_date') }}:</div>
                                <div class="col-lg-8 col-md-7">{{ new Date(project.end_date) | date('DD.MM.YYYY') }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-4">
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
                    <div class="card mb-4">
                        <div class="card-header">
                            <h5 class="mb-0">{{ $t('project.overview') }}</h5>
                        </div>
                        <div class="card-body">
                            <div class="d-flex justify-content-around">
                                <router-link :to="{ name: 'projects.show.roadmap', params: { slug: project.slug } }" class="btn btn-outline-primary btn-sm">{{ $t('project.overview.roadmap') }}</router-link>
                                <router-link :to="{ name: 'projects.show.board', params: { slug: project.slug } }" class="btn btn-outline-primary btn-sm">{{ $t('project.overview.board') }}</router-link>
                                <router-link :to="{ name: 'projects.show.gantt', params: { slug: project.slug } }" class="btn btn-outline-primary btn-sm">{{ $t('project.overview.gantt') }}</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 col-12">
                    <div class="card">
                        <div class="card-header">
                            <div class="row">
                                <div class="col d-flex align-items-center">
                                    <h5 class="mb-0">{{ $t('project.show.tasks') }}</h5>
                                </div>
                                <div class="col text-right">
                                    <button class="btn btn-outline-primary btn-sm" @click="addTaskModal">{{ $t('project.task.add.btn') }}</button>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <template v-if="project.tasks && project.tasks.length > 0">
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
                                {{ $t('project.task.no_tasks')}}
                            </template>
                        </div>
                    </div>
                </div>
            </template>

            <custom-modal ref="editProjectModal" @ok="editProject" :modalSchema="modalSchemaEditProject" />
            <custom-modal ref="addTaskModal" @ok="addTask" :modalSchema="modalSchemaAddTask" />
        </div>
    </div>
</template>

<script>
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
                projectStatusOptions: [],
                taskStatusOptions: [],
                taskPriorityOptions: [],
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
                modalSchemaAddTask: {
                    form: {
                        url: '/api/tasks',
                        method: 'post',
                        fields: [
                            {
                                label: this.$t('task.title'),
                                required: true,
                                name: 'title',
                                input: 'text',
                                type: 'text',
                                value: '',
                                config: {}
                            },
                            {
                                label: this.$t('task.description'),
                                required: true,
                                name: 'description',
                                input: 'textarea',
                                type: 'textarea',
                                value: '',
                                config: {}
                            }
                        ],
                        hiddenFields: [],
                        config: {}
                    },
                    modalRef: 'addTask',
                    modalTitle: this.$t('project.task.add.title.modal'),
                    okBtnTitle: this.$t('modal.add.btn')
                },
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
                    this.projectStatusOptions = response.data.meta.projectStatusOptions;
                    this.taskStatusOptions = response.data.meta.taskStatusOptions;
                    this.taskPriorityOptions = response.data.meta.taskPriorityOptions;
                    this.loading = false;
                });
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
                            options: this.projectStatusOptions
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
            addTaskModal() {
                let versionOptions = [
                    {'text': this.$t('task.version.no_version'), 'value': null}
                ];
                if (this.sortedVersions && this.sortedVersions.length > 0) {
                    for (let i = 0; i < this.sortedVersions.length; i++) {
                        versionOptions.push({'text': this.sortedVersions[i].title, 'value': this.sortedVersions[i].id})
                    }
                }

                let selectFields = [
                    {
                        label: this.$t('task.start_date'),
                        required: true,
                        name: 'start_date',
                        input: 'date',
                        type: 'date',
                        value: '',
                        config: {
                            min: this.project.start_date,
                            max: this.project.end_date ? this.project.end_date : null
                        }
                    },
                    {
                        label: this.$t('task.end_date'),
                        required: true,
                        name: 'end_date',
                        input: 'date',
                        type: 'date',
                        value: '',
                        config: {
                            min: this.project.start_date,
                            max: this.project.end_date ? this.project.end_date : null
                        }
                    },
                    {
                        label: this.$t('task.priority'),
                        required: true,
                        name: 'priority',
                        input: 'select',
                        type: 'select',
                        value: '',
                        config: {
                            options: this.taskPriorityOptions,
                            disabledOption: true
                        }
                    },
                    {
                        label: this.$t('task.version'),
                        required: false,
                        name: 'version_id',
                        input: 'select',
                        type: 'select',
                        value: null,
                        config: {
                            options: versionOptions,
                            disabledOption: false
                        }
                    },
                ];

                this.modalSchemaAddTask.form.fields.push(...selectFields);

                this.modalSchemaAddTask.form.hiddenFields = [
                    {name: 'project_id', value: this.project.id},
                ];

                this.$refs['addTaskModal'].openModal();
            },
            addTask(response) {
                console.log(response.data);
                let task = response.data.data;
                this.$router.push({ name: 'tasks.show', params: {id: task.id} });
            },
        }
    }
</script>
