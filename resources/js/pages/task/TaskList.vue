<template>
    <div class="task-list">
        <template v-if="loading">
            <div class="row mb-4">
                <div class="col">
                    <content-placeholders class="mb-4">
                        <content-placeholders-heading />
                    </content-placeholders>
                </div>
            </div>
            <div class="row mb-4">
                <div class="col-lg-4 col-md-6 col-12" v-for="n in 12" >
                    <content-placeholders class="mb-4">
                        <content-placeholders-heading />
                        <content-placeholders-text :lines="3" />
                    </content-placeholders>
                </div>
            </div>
        </template>
        <template v-else-if="tasks && tasks.length > 0">
            <div class="row">
                <div class="col-12">
                    <h1>{{ $t('task.my_open_tasks') }}</h1>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="row">
                <div class="col-12">
                    <h1>{{ $t('task.my_open_tasks') }}</h1>
                </div>
                <div class="col-12">
                    <p>{{ $t('task.no_open_tasks') }}</p>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        name: "TaskList",
        data() {
            return {
                loading: false,
                tasks: [],
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
                });
            },
        }
    }
</script>
