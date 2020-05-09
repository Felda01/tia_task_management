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
                    <button v-if="isSenior" class="btn btn-outline-primary" @click="editProjectModal">{{ $t('project.edit.btn') }}</button>
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
                                <div class="col-lg-8 col-md-7">{{ project.status | capitalize }}</div>
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
                        <div class="card-header d-flex justify-content-between">
                            <h5 class="mb-0">{{ $t('project.team') }}</h5>
                            <button v-if="isSenior" class="btn btn-outline-primary btn-sm" @click="addUserToProjectModal">{{ $t('project.team.add.btn') }}</button>
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
                                <router-link :to="{ name: 'projects.show.gantt', params: { slug: project.slug } }" class="btn btn-outline-primary btn-sm">{{ $t('project.overview.gantt') }}</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 col-12">
                    <div class="row">
                        <div class="col-12 mb-4">
                            <div class="card">
                                <div class="card-header d-flex justify-content-between align-items-center">
                                    <h5 class="mb-0">{{ $t('project.show.tasks') }}</h5>
                                    <button v-if="isSenior" class="btn btn-outline-primary btn-sm" @click="addTaskModal">{{ $t('project.task.add.btn') }}</button>
                                </div>
                                <div class="card-body">
                                    Filter
                                </div>
                            </div>
                        </div>
                        <template v-if="filteredTasks.length > 0">
                            <div class="col-lg-6 col-12 mb-4" v-for="task in filteredTasks">
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
                        </template>
                        <template v-else>
                            <div class="col-12">
                                {{ $t('project.task.no_tasks')}}
                            </div>
                        </template>
                    </div>
                </div>

                <!-- Edit project modal -->
                <custom-modal ref="editProjectModal" @ok="editProject" :modalSchema="modalSchemaEditProject" />

                <!-- Add task modal -->
                <custom-modal ref="addTaskModal" @ok="addTask" :modalSchema="modalSchemaAddTask" />

                <!-- Add user to project modal -->
                <custom-modal ref="addUserToProjectModal" @ok="addUserToProject" :modalSchema="modalSchemaAddUserToProject" />
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
        name: "ProjectDetail",
        computed: {
            sortedVersions() {
                if (this.project && this.project.versions) {
                    return _.orderBy(this.project.versions, 'end_date', 'asc');
                }
            },
            filteredTasks() {
                if (this.project.tasks && this.project.tasks.length > 0) {
                    return this.project.tasks;
                }
                return [];
            },
            ...mapGetters([
                'isSenior'
            ]),
        },
        data() {
            return {
                project: null,
                loading: false,
                errorCode: 0,
                projectStatusOptions: [],
                taskStatusOptions: [],
                taskPriorityOptions: [],
                allUsers: [],
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
                modalSchemaAddUserToProject: {
                    form: {
                        url: '/api/projects/' + this.$route.params.slug + '/assign-user',
                        method: 'put',
                        fields: [],
                        hiddenFields: [],
                        config: {}
                    },
                    modalRef: 'addUserToProject',
                    modalTitle: this.$t('project.add.user.title.modal'),
                    okBtnTitle: this.$t('modal.assign.btn')
                }
            }
        },
        created() {
            this.fetchData();
        },
        methods: {
            fetchData() {
                this.loading = true;
                this.axios.get('/api/projects/' + this.$route.params.slug).then(response => {
                    this.project = response.data.data;
                    this.projectStatusOptions = response.data.meta.projectStatusOptions;
                    this.taskStatusOptions = response.data.meta.taskStatusOptions;
                    this.taskPriorityOptions = response.data.meta.taskPriorityOptions;
                    this.allUsers = response.data.meta.allUsers.data;
                    this.loading = false;
                }).catch(error => {
                    this.errorCode = error.response.status;
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
                        config: {
                            max: this.project.min_start_date
                        }
                    },
                    {
                        label: this.$t('project.end_date'),
                        required: false,
                        name: 'end_date',
                        input: 'date',
                        type: 'date',
                        value: this.project.end_date,
                        config: {
                            min: this.project.max_end_date
                        }
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
            availableUsersForProject() {
                let result = [];

                let availableUsers = _.differenceWith(this.allUsers, this.project.users, _.isEqual);

                for (let i = 0; i < availableUsers.length; i++) {
                    result.push({'text': availableUsers[i].fullName, 'value': availableUsers[i].id})
                }

                return result;
            },
            addUserToProjectModal() {
                this.modalSchemaAddUserToProject.form.fields = [
                    {
                        label: this.$t('project.user'),
                        required: false,
                        name: 'user_id',
                        input: 'select',
                        type: 'select',
                        value: null,
                        config: {
                            options: this.availableUsersForProject(),
                            disabledOption: true
                        }
                    },
                ];

                this.$refs['addUserToProjectModal'].openModal();
            },
            addUserToProject(response) {
                this.task.users = response.data.data;
            },
        }
    }
</script>
