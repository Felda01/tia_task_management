<template>
    <div class="client-list">
        <div class="row mb-4">
            <div class="col">
                <h1>Clients</h1>

            </div>
            <div class="col text-right">
                <button class="btn btn-primary text-right" @click="addClientModal">Add client</button>
            </div>
        </div>
        <div class="row mb-4">
            <template v-if="loading">
                <div class="col-lg-4 col-md-6 col-12" v-for="n in 12" >
                    <content-placeholders class="mb-4">
                        <content-placeholders-heading />
                        <content-placeholders-text :lines="3" />
                    </content-placeholders>
                </div>
            </template>
            <template v-else-if="clients && clients.length > 0">
                <div class="col-lg-4 col-md-6 col-12" v-for="client in clients" >
                    <router-link :to="{ name: 'clients.show', params: { id: client.id } }" class="text-decoration-none">
                        <div class="card mb-4 ">
                            <div class="card-header">
                                <h5 class="mb-0"><span :class="'badge badge-' + badgeType(client.type) + ' text-uppercase mr-2'">{{ client.type }}</span>{{ client.name }}</h5>
                            </div>
                            <div class="card-body">
                                <p class="font-weight-bold text-decoration-none text-black-50">Projects:</p>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-12 text-center" v-if="showLoadButton">
                    <button :disabled="loadingLoadMore" class="btn btn-primary" @click="loadMoreData">
                        <span v-if="loadingLoadMore" class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
                        {{ $t('load_more_btn')}}
                    </button>
                </div>
            </template>
            <template v-else>
                <div class="col">
                    <p>{{ $t('client.no_clients') }}</p>
                </div>
            </template>
        </div>
        <b-modal ref="addClient" :title="$t('client.add.title')"
                 @show="resetAddClientModal"
                 @hidden="resetAddClientModal"
                 @ok="addClient">
            <form @keydown="form.onKeydown($event)" enctype="multipart/form-data">
                <!-- Alert -->
                <alert-error :form="form"></alert-error>

                <!-- Email -->
                <div class="form-group">
                    <label>{{ $t('client.name') }}</label>
                    <div>
                        <input v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }" class="form-control" type="text" name="name">
                        <has-error :form="form" field="name" />
                    </div>
                </div>

                <!-- Type -->
                <div class="form-group">
                    <label>{{ $t('client.type') }}</label>
                    <b-form-select v-model="form.type" :options="clientTypeOptions" :class="{ 'is-invalid': form.errors.has('type') }" class="form-control" />
                    <has-error :form="form" field="type" />
                </div>

                <!-- Client - Email -->
                <div class="form-group">
                    <label>{{ $t('client.user.email') }}</label>
                    <div>
                        <input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="email" name="email">
                        <has-error :form="form" field="email" />
                    </div>
                </div>

                <!-- Client - First name -->
                <div class="form-group">
                    <label>{{ $t('client.user.first_name') }}</label>
                    <div>
                        <input v-model="form.first_name" :class="{ 'is-invalid': form.errors.has('first_name') }" class="form-control" type="text" name="first_name">
                        <has-error :form="form" field="first_name" />
                    </div>
                </div>

                <!-- Client - Last name -->
                <div class="form-group">
                    <label>{{ $t('client.user.last_name') }}</label>
                    <div>
                        <input v-model="form.last_name" :class="{ 'is-invalid': form.errors.has('last_name') }" class="form-control" type="text" name="last_name">
                        <has-error :form="form" field="last_name" />
                    </div>
                </div>
            </form>
            <template v-slot:modal-footer="{ ok, cancel }">
                <button :disabled="form.busy" class="btn btn-primary" @click="ok()">
                    <span v-if="form.busy" class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
                    {{ $t('client.add.ok')}}
                </button>
                <button class="btn btn-danger" @click="cancel()">{{ $t('cancel')}}</button>
            </template>
        </b-modal>
    </div>
</template>

<script>
    import Form from 'vform';

    export default {
        name: "ClientList",
        data() {
            return {
                loading: false,
                clients: null,
                form: new Form({
                    'name': '',
                    'type': 'b',
                    'email': '',
                    'first_name': '',
                    'last_name': '',
                }),
                clientTypeOptions: [
                    { text: 'A', value: 'a' },
                    { text: 'B', value: 'b' },
                    { text: 'C', value: 'c' },
                ],
                links: null,
                meta: null,
                loadingLoadMore: false
            }
        },
        created () {
            this.fetchData();
        },
        computed: {
            showLoadButton() {
                return this.links && this.links.next;
            }
        },
        methods: {
            fetchData() {
                this.loading = true;
                this.axios.get('/api/clients').then((response) => {
                    this.clients = response.data.data;
                    this.links = response.data.links;
                    this.meta = response.data.meta;
                    this.loading = false;
                });
            },
            badgeType(type) {
                switch (type) {
                    case 'a':
                        return 'danger';
                    case 'b':
                        return 'primary';
                    default:
                        return 'success';
                }
            },
            addClient(bvModalEvt) {
                bvModalEvt.preventDefault();

                this.form.post('/api/clients').then(response => {
                    this.clients.push(response.data.data);
                    this.$nextTick(() => {
                        this.$refs['addClient'].hide();
                    })
                });
            },
            addClientModal() {
                this.$refs['addClient'].show();
            },
            resetAddClientModal() {
                this.form.reset();
            },
            loadMoreData() {
                this.loadingLoadMore = true;
                this.axios.get(this.links.next).then(response => {
                    this.clients = this.clients.concat(response.data.data);
                    this.links = response.data.links;
                    this.meta = response.data.meta;
                    this.loadingLoadMore = false;
                });
            }
        },
    }
</script>
