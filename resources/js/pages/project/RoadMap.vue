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
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <div class="row">
                                <div class="col d-flex align-items-center">
                                    <h5 class="mb-0">{{ $t('project.show.versions') }}</h5>
                                </div>
                                <div class="col text-right">
                                    <button v-if="isSenior" class="btn btn-outline-primary btn-sm" @click="addVersionModal">{{ $t('project.version.add.btn') }}</button>
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
                                                <button v-if="isSenior" class="btn btn-outline-primary btn-sm" @click="editVersionModal(version)">{{ $t('project.version.edit.btn') }}</button>
                                                <button v-if="isSenior" class="btn btn-outline-danger btn-sm" @click="deleteVersionModal(version)">{{ $t('project.version.delete.btn') }}</button>
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

            <custom-modal ref="addVersionModal" @ok="addVersion" :modalSchema="modalSchemaAddVersion" />
            <custom-modal ref="editVersionModal" @ok="editVersion" :modalSchema="modalSchemaEditVersion" />
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
                this.axios.get('/api/projects/' + this.$route.params.slug + "/roadmap").then((response) => {
                    this.project = response.data.data;
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
                //
            }
        }
    }
</script>
