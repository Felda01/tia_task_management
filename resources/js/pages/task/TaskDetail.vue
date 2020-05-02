<template>
    <div class="task-detail">
        <div class="row">
            <template v-if="loading">
                <div class="col-12">
                    <content-placeholders class="mb-4">
                        <content-placeholders-heading />
                    </content-placeholders>
                </div>
                <div class="col-md-4 col-12">
                    <content-placeholders class="mb-4">
                        <content-placeholders-heading />
                        <content-placeholders-text :lines="3" />
                    </content-placeholders>
                    <content-placeholders class="mb-4">
                        <content-placeholders-heading />
                        <content-placeholders-text :lines="2" />
                    </content-placeholders>
                    <content-placeholders class="mb-4">
                        <content-placeholders-heading />
                        <content-placeholders-text :lines="2" />
                    </content-placeholders>
                    <content-placeholders class="mb-4">
                        <content-placeholders-heading />
                        <content-placeholders-text :lines="2" />
                    </content-placeholders>
                    <content-placeholders class="mb-4">
                        <content-placeholders-heading />
                        <content-placeholders-text :lines="3" />
                    </content-placeholders>
                </div>
                <div class="col-md-8 col-12">
                    <content-placeholders class="mb-4" v-for="n in 3" :key="'des-' + n">
                        <content-placeholders-heading  />
                        <content-placeholders-text :lines="4" />
                    </content-placeholders>
                    <content-placeholders class="mb-4" v-for="n in 3" :key="'com-' + n">
                        <content-placeholders-heading  />
                        <content-placeholders-text :lines="5" />
                    </content-placeholders>
                </div>
            </template>
            <template v-else-if="task">
                <div class="col-12 mb-4 d-flex justify-content-between">
                    <h1>{{ task.title }}</h1>
                    <button class="btn btn-outline-primary" @click="editTaskModal">{{ $t('task.edit.btn') }}</button>
                </div>
                <div class="col-md-4">
                    <div class="card mb-4">
                        <div class="card-header">
                            <h5 class="mb-0">{{ $t('task.show.details') }}</h5>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4">{{ $t('task.show.details.project') }}:</div>
                                <div class="col-md-8"><router-link :to="{ name: 'projects.show', params: { slug: task.project.slug } }" class="text-decoration-none">{{ task.project.slug }}</router-link></div>
                            </div>
                            <div class="row" v-if="task.version">
                                <div class="col-md-4">{{ $t('task.show.details.version') }}:</div>
                                <div class="col-md-8">{{ task.version.title }}</div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">{{ $t('task.show.details.status') }}:</div>
                                <div class="col-md-8">{{ task.status | capitalize }}</div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">{{ $t('task.show.details.priority') }}:</div>
                                <div class="col-md-8">{{ task.priority | capitalize }}</div>
                            </div>
                        </div>

                    </div>
                    <div class="card mb-4">
                        <div class="card-header">
                            <h5 class="mb-0">{{ $t('task.show.people') }}</h5>
                        </div>
                        <div class="card-body">
                            <div class="row mb-2">
                                <div class="col-md-4">{{ $t('task.show.people.assignee') }}:</div>
                                <div class="col-md-8">
                                    <div class="d-flex" v-if="task.assignee">
                                        <div class="pr-2 d-flex">
                                            <img :src="task.assignee.photo" class="avatar avatar-sm" :alt="task.assignee.fullName">
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <p class="mb-0">{{ task.assignee.fullName }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">{{ $t('task.show.people.reporter') }}:</div>
                                <div class="col-md-8">
                                    <div class="d-flex">
                                        <div class="pr-2 d-flex">
                                            <img :src="task.reporter.photo" class="avatar avatar-sm" :alt="task.reporter.fullName">
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <p class="mb-0">{{ task.reporter.fullName }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-4">
                        <div class="card-header">
                            <h5 class="mb-0">{{ $t('task.show.dates') }}</h5>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4">{{ $t('task.show.dates.start_date') }}:</div>
                                <div class="col-md-8">{{ new Date(task.start_date) | date('DD.MM.YYYY') }}</div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">{{ $t('task.show.dates.end_date') }}:</div>
                                <div class="col-md-8">{{ new Date(task.end_date) | date('DD.MM.YYYY') }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5 class="mb-0">{{ $t('task.show.time_tracking') }}</h5>
                            <button class="btn btn-sm btn-outline-primary" @click="addTimeTrackingModal">{{ $t('task.add.time_tracking.btn') }}</button>
                        </div>
                        <div class="card-body">
                            <template v-if="task.timeTracking && task.timeTracking.length > 0">
                                <div v-for="(item, indexItem) in groupedTimeTrackingByDate" :key="'item-'+ indexItem">
                                    <p class="mb-2">{{ new Date(item.date) | date('DD.MM.YYYY') }}</p>
                                    <div v-for="(time, index) in item.timeTracking" :key="'time-' + time.id" class="mb-2 d-flex justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <img :src="time.user.photo" class="avatar avatar-sm mr-2" :alt="time.user.fullName">
                                            <p class="mb-0">{{ time.user.fullName }} - {{ time.time }}</p>
                                        </div>
                                        <button v-if="userId === time.user.id" class="btn btn-sm btn-outline-danger" @click="removeTimeTracking(time)">X</button>
                                    </div>
                                </div>
                                <div class="border-top pt-2 pb-2">
                                    <p class="mb-0">{{ $t('task.time_tracking.total') }}: {{ sumTimeTracking }}</p>
                                </div>
                            </template>
                            <template v-else>
                                {{ $t('task.time_tracking.no_time_tracking') }}
                            </template>
                        </div>
                    </div>
                    <div class="card mb-4">
                        <div class="card-header">
                            <h5 class="mb-0">{{ $t('task.show.dependencies') }}</h5>
                        </div>
                        <div class="card-body"></div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="card mb-4">
                        <div class="card-header">
                            <h5 class="mb-0">{{ $t('task.show.description') }}</h5>
                        </div>
                        <div class="card-body">
                            <p class="mb-0">{{ task.description }}</p>
                        </div>
                    </div>
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5 class="mb-0">{{ $t('task.show.comments') }}</h5>
                            <button class="btn btn-sm btn-outline-primary" @click="addCommentModal">{{ $t('task.add.comment.btn') }}</button>
                        </div>
                        <div class="card-body">
                            <template v-if="task.comments && task.comments.length > 0">
                                <div v-for="(comment, index) in sortedComments" :key="comment.id" class="p-3" :class="{'border-bottom': index < sortedComments.length - 1}">
                                    <div class="d-flex mb-2">
                                        <div class="d-flex align-items-center">
                                            <img :src="comment.user.photo" class="avatar avatar-sm mr-2" :alt="comment.user.fullName">
                                            <p class="mb-0">{{ comment.user.fullName }} {{ $t('comment.text.added') }} {{ new Date(comment.created_at) | date('DD.MM.YYYY HH:mm') }}</p>
                                            <p v-if="comment.type === 'intern'" class="mb-0">{{ $t('comment.restricted_to') }} <span class="text-danger">{{ comment.type | upper }}</span></p>
                                        </div>
                                    </div>
                                    <p class="mb-0">{{ comment.message }}</p>
                                </div>
                            </template>
                            <template v-else>
                                {{ $t('task.comments.no_comments') }}
                            </template>
                        </div>
                    </div>
                </div>
            </template>
            <custom-modal ref="editTaskModal" @ok="editTask" :modalSchema="modalSchemaEditTask" />
            <custom-modal ref="addCommentModal" @ok="addComment" :modalSchema="modalSchemaAddComment" />
            <custom-modal ref="addTimeTrackingModal" @ok="addTimeTracking" :modalSchema="modalSchemaAddTimeTracking" />
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "TaskDetail",
        computed: {
            sortedVersions() {
                if (this.task && this.task.project.versions) {
                    return _.orderBy(this.task.project.versions, 'end_date', 'asc');
                }
                return [];
            },
            sortedComments() {
                if (this.task && this.task.comments) {
                    return _.orderBy(this.task.comments, 'created_at', 'asc');
                }
                return  [];
            },
            sumTimeTracking() {
                if (this.task && this.task.timeTracking) {
                    return _.sumBy(this.task.timeTracking, item => Number(item.time));
                }
                return 0;
            },
            groupedTimeTrackingByDate() {
                if (this.task && this.task.timeTracking) {
                    return _(this.task.timeTracking)
                        .groupBy(x => x.date)
                        .map((value, key) => ({date: key, timeTracking: value}))
                        .value();
                }
                return [];
            },
            ...mapGetters([
                'isSenior',
                'isClient',
                'userId'
            ]),
        },
        data() {
            return {
                task: null,
                loading: false,
                modalSchemaEditTask: {
                    form: {
                        url: '/api/tasks/' + this.$route.params.id,
                        method: 'put',
                        fields: [],
                        hiddenFields: [],
                        config: {}
                    },
                    modalRef: 'editTask',
                    modalTitle: this.$t('task.edit.title.modal'),
                    okBtnTitle: this.$t('modal.edit.btn')
                },
                taskPriorityOptions: [],
                taskStatusOptions: [],
                commentTypeOptions: [],
                modalSchemaAddComment: {
                    form: {
                        url: '/api/comments',
                        method: 'post',
                        fields: [],
                        hiddenFields: [],
                        config: {}
                    },
                    modalRef: 'addComment',
                    modalTitle: this.$t('comment.add.title.modal'),
                    okBtnTitle: this.$t('modal.add.btn')
                },
                modalSchemaAddTimeTracking: {
                    form: {
                        url: '/api/time-tracking',
                        method: 'post',
                        fields: [],
                        hiddenFields: [],
                        config: {}
                    },
                    modalRef: 'addTimeTracking',
                    modalTitle: this.$t('time_tracking.add.title.modal'),
                    okBtnTitle: this.$t('modal.add.btn')
                },
                removeTimeTrackingMessageBoxOptions: {
                    title: this.$t('modalWarning'),
                    okVariant: 'success',
                    cancelVariant: 'danger',
                }

            }
        },
        created() {
            this.fetchData();
        },
        methods: {
            fetchData() {
                this.loading = true;
                this.axios.get('/api/tasks/' + this.$route.params.id).then((response) => {
                    this.task = response.data.data;
                    this.taskStatusOptions = response.data.meta.taskStatusOptions;
                    this.taskPriorityOptions = response.data.meta.taskPriorityOptions;
                    this.commentTypeOptions = response.data.meta.commentTypeOptions;
                    this.loading = false;
                });
            },
            editTask(response) {
                this.task = response.data.data;
            },
            editTaskModal() {
                let versionOptions = [
                    {'text': this.$t('task.version.no_version'), 'value': null}
                ];
                if (this.sortedVersions && this.sortedVersions.length > 0) {
                    for (let i = 0; i < this.sortedVersions.length; i++) {
                        versionOptions.push({'text': this.sortedVersions[i].title, 'value': this.sortedVersions[i].id})
                    }
                }

                let teamOptions = [
                    {'text': this.$t('task.assignee.no_assignee'), 'value': null}
                ];

                for (let i = 0; i < this.task.project.users.length; i++) {
                    teamOptions.push({'text': this.task.project.users[i].fullName, 'value': this.task.project.users[i].id});
                }

                this.modalSchemaEditTask.form.fields = [
                    {
                        label: this.$t('task.assignee'),
                        required: true,
                        name: 'assignee_id',
                        input: 'select',
                        type: 'select',
                        value: this.task.assignee ? this.task.assignee.id : null,
                        config: {
                            options: teamOptions
                        }
                    },
                    {
                        label: this.$t('task.title'),
                        required: true,
                        name: 'title',
                        input: 'text',
                        type: 'text',
                        value: this.task.title,
                        config: {}
                    },
                    {
                        label: this.$t('task.description'),
                        required: true,
                        name: 'description',
                        input: 'textarea',
                        type: 'textarea',
                        value: this.task.description,
                        config: {}
                    },
                    {
                        label: this.$t('task.priority'),
                        required: true,
                        name: 'priority',
                        input: 'select',
                        type: 'select',
                        value: this.task.priority,
                        config: {
                            options: this.taskPriorityOptions
                        }
                    },
                    {
                        label: this.$t('task.status'),
                        required: true,
                        name: 'status',
                        input: 'select',
                        type: 'select',
                        value: this.task.status,
                        config: {
                            options: this.taskStatusOptions
                        }
                    },
                    {
                        label: this.$t('task.start_date'),
                        required: true,
                        name: 'start_date',
                        input: 'date',
                        type: 'date',
                        value: this.task.start_date,
                        config: {
                            min: this.task.project.start_date,
                            max: this.task.project.end_date
                        }
                    },
                    {
                        label: this.$t('task.end_date'),
                        required: true,
                        name: 'end_date',
                        input: 'date',
                        type: 'date',
                        value: this.task.end_date,
                        config: {
                            min: this.task.project.start_date,
                            max: this.task.project.end_date
                        }
                    },
                    {
                        label: this.$t('task.version'),
                        required: true,
                        name: 'version_id',
                        input: 'select',
                        type: 'select',
                        value: this.task.version ? this.task.version.id : null,
                        config: {
                            options: versionOptions
                        }
                    },
                ];

                this.modalSchemaEditTask.form.hiddenFields = [
                    {name: 'project_id', value: this.task.project.id},
                ];

                this.$refs['editTaskModal'].openModal();
            },
            addCommentModal() {
                let selectFields = [];
                if (this.isClient) {
                    this.modalSchemaAddComment.form.hiddenFields = [
                        {name: 'task_id', value: this.task.id},
                        {name: 'type', value: 'all'},
                    ];

                    selectFields = [
                        {
                            label: this.$t('comment.message'),
                            required: true,
                            name: 'message',
                            input: 'textarea',
                            type: 'textarea',
                            value: '',
                            config: {}
                        },
                    ];

                } else {
                    this.modalSchemaAddComment.form.hiddenFields = [
                        {name: 'task_id', value: this.task.id},
                    ];

                    selectFields = [
                        {
                            label: this.$t('comment.message'),
                            required: true,
                            name: 'message',
                            input: 'textarea',
                            type: 'textarea',
                            value: '',
                            config: {}
                        },
                        {
                            label: this.$t('comment.type'),
                            required: true,
                            name: 'type',
                            input: 'select',
                            type: 'select',
                            value: 'all',
                            config: {
                                options: this.commentTypeOptions,
                                disabledOption: false
                            }
                        },
                    ];
                }

                this.modalSchemaAddComment.form.fields = selectFields;

                this.$refs['addCommentModal'].openModal();
            },
            addComment(response) {
                this.task.comments.push(response.data.data);
            },
            addTimeTrackingModal() {
                this.modalSchemaAddTimeTracking.form.fields = [
                    {
                        label: this.$t('time_tracking.date'),
                        required: true,
                        name: 'date',
                        input: 'date',
                        type: 'date',
                        value: '',
                        config: {
                            min: this.task.start_date,
                            max: this.task.end_date
                        }
                    },
                    {
                        label: this.$t('time_tracking.time'),
                        required: true,
                        name: 'time',
                        input: 'text',
                        type: 'text',
                        value: '',
                        config: {}
                    },
                ];

                this.modalSchemaAddTimeTracking.form.hiddenFields = [
                    {name: 'task_id', value: this.task.id},
                ];

                this.$refs['addTimeTrackingModal'].openModal();
            },
            addTimeTracking(response) {
                this.task.timeTracking.push(response.data.data);
            },
            removeTimeTracking(time) {
                this.$bvModal.msgBoxConfirm(this.$t('time_tracking.removeMessage'), this.removeTimeTrackingMessageBoxOptions).then(value => {
                    if (value) {
                        this.axios.delete('/api/time-tracking/' + time.id).then(response => {
                            this.task.timeTracking = _.filter(this.task.timeTracking, function(timeElement) {
                                return timeElement.id !== time.id;
                            });
                        });
                    }
                });
            },
        }
    }
</script>
