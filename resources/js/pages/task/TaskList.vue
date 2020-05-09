<template>
    <div class="task-list">
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
            <template v-else-if="tasks">
                <div class="col-12 mb-4">
                    <h1>{{ $t('task.my_open_tasks') }}</h1>
                </div>
                <template v-if="tasks.length > 0">
                    Tasks
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
        data() {
            return {
                loading: false,
                tasks: [],
                errorCode: 0,
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
        }
    }
</script>
