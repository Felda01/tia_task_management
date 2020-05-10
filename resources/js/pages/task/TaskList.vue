<template>
    <div class="task-list">
        <div class="row">
            <template v-if="loading">
                <div class="col-12">
                    <content-placeholders class="mb-4">
                        <content-placeholders-heading />
                    </content-placeholders>
                </div>
                <div class="col-lg-4 col-12" v-for="n in 12" >
                    <content-placeholders class="mb-4">
                        <content-placeholders-heading />
                        <content-placeholders-text :lines="3" />
                    </content-placeholders>
                </div>
            </template>
            <template v-else-if="tasks">
                <div class="col-12 mb-4">
                    <h1>{{ $t('task.my_open_tasks') }}</h1>
                </div>
                <div class="col-12 mb-4">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5 class="mb-0">{{ $t('project.show.tasks') }}</h5>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="task-sort">{{ $t('task.sort') }}</label>
                                <b-form-select id="task-sort" :options="taskSortOptions" v-model="taskSort" class="form-control"></b-form-select>
                            </div>
                        </div>
                    </div>
                </div>
                <template v-if="tasks.length > 0">
                    <div class="col-lg-4 col-12 mb-4" v-for="task in tasks">
                        <router-link :to="{ name: 'tasks.show', params: { id: task.id } }" class="text-decoration-none">
                            <div class="card h-100">
                                <div class="card-header">
                                    <h5 class="mb-0">{{ task.title }}</h5>
                                </div>
                                <div class="card-body d-flex justify-content-between">
                                    <div class="d-flex">
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
                        <p>{{ $t('task.no_open_tasks') }}</p>
                    </div>
                </template>
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
    export default {
        name: "TaskList",
        computed: {
            filteredTasks() {
                if (this.tasks && this.tasks.length > 0) {
                    switch (this.taskSort) {
                        case "normal-desc": {
                            return _.orderBy(this.tasks, ['id'], ['desc']);
                        }
                        case "end-date-asc": {
                            return _.orderBy(this.tasks, ['end_date'], ['asc']);
                        }
                        case "end-date-desc": {
                            return _.orderBy(this.tasks, ['end_date'], ['desc']);
                        }
                        case "priority-asc": {
                            return _.sortBy(this.tasks, (e) => {
                                return this.prioritySort(e.priority, false);
                            });
                        }
                        case "priority-desc": {
                            return _.sortBy(this.tasks, (e) => {
                                return this.prioritySort(e.priority, true);
                            });
                        }
                        default: return this.tasks;
                    }
                }
                return [];
            },
        },
        data() {
            return {
                loading: false,
                tasks: [],
                errorCode: 0,
                taskSort: 'normal-asc',
                taskSortOptions: [
                    { value: 'normal-asc', text: this.$t('task.filter.normal.asc') },
                    { value: 'normal-desc', text: this.$t('task.filter.normal.desc') },
                    { value: 'end-date-asc', text: this.$t('task.filter.endDate.asc') },
                    { value: 'end-date-desc', text: this.$t('task.filter.endDate.desc') },
                    { value: 'priority-asc', text: this.$t('task.filter.priority.asc') },
                    { value: 'priority-desc', text: this.$t('task.filter.priority.desc') },
                ]
            }
        },
        created () {
            this.fetchData();
        },
        methods: {
            fetchData() {
                this.loading = true;
                this.axios.get('/api/tasks').then((response) => {
                    this.tasks = response.data.data;
                    console.log(this.tasks);
                    this.loading = false;
                }).catch(error => {
                    this.errorCode = error.response.status;
                    this.loading = false;
                });
            },
            prioritySort(priority, desc) {
                switch (priority) {
                    case "none": {
                        return desc ? 5 : 1;
                    }
                    case "low": {
                        return desc ? 4 : 2;
                    }
                    case "normal": {
                        return 3;
                    }
                    case "high": {
                        return desc ? 2 : 4;
                    }
                    case "immediate": {
                        return desc ? 1 : 5;
                    }
                }
            }
        }
    }
</script>
