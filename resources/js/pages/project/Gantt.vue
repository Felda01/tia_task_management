<template>
    <div class="project-gantt">
        <div class="row">
            <template v-if="loading">
                <div class="col-12">
                    <content-placeholders class="mb-4">
                        <content-placeholders-heading  />
                        <content-placeholders-text :lines="20" />
                    </content-placeholders>
                </div>
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
            <template v-else>
                <div class="col-12 mb-4" v-if="project">
                    <router-link :to="{ name: 'projects.show', params: { slug: project.slug } }" class="btn btn-outline-primary btn-sm">{{ $t('project.overview.back_to_project') }}</router-link>
                </div>
                <div class="col-12 mb-4">
                    <h2>{{ $t('project.show.gantt') }}</h2>
                </div>
                <div class="col-12">
                    <svg id="gantt" ref="gantt"></svg>
                    <p v-if="project && project.tasks && project.tasks.length === 0">{{ $t('project.gantt.no_tasks') }}</p>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    import Gantt from 'frappe-gantt';

    export default {
        name: "Gannt",
        data() {
            return {
                gantt: null,
                loading: false,
                errorCode: 0,
                project: null,
            }
        },
        mounted() {
            this.fetchData().then(() => {
                let tasks = this.transformTasks(this.project.tasks);
                if (tasks.length > 0) {
                    this.gantt = new Gantt(this.$refs['gantt'], tasks, {
                        custom_popup_html: function (task) {
                            return '';
                        },
                        is_draggable: false
                    });
                }
            });
        },
        methods: {
            fetchData() {
                this.loading = true;
                return this.axios.get('/api/projects/' + this.$route.params.slug + "/gantt").then(response => {
                    this.project = response.data.data;
                    this.loading = false;
                }).catch(error => {
                    console.log(error);
                    this.errorCode = error.response.status;
                    this.loading = false;
                });
            },
            transformTasks(tasks) {
                let result = [];
                for (let i = 0; i < tasks.length; i++) {
                    let task = tasks[i];
                    result.push({
                        id: task.id.toString(),
                        name: task.title,
                        start: task.start_date,
                        end: task.end_date,
                        progress: 100,
                        dependencies: _.join(_.map(task.dependencies, 'id'), ', ')
                    });
                }
                return result;
            }
        }
    }
</script>
