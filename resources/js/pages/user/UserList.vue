<template>
    <div class="user-list">
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
            <template v-else-if="users">
                <div class="col-12 mb-4 d-flex justify-content-between">
                    <h1>{{ $t('user_list.users') }}</h1>
                    <button v-if="role === 'senior'" class="btn btn-outline-primary" @click="addUserModal">{{ $t('user_list.add.user.btn') }}</button>
                </div>
                <template v-if="users.length > 0">
                    <div class="col-lg-4 col-md-6 col-12 mb-4" v-for="user in users" >
                        <router-link :to="{ name: 'users.show', params: { id: user.id } }" class="text-decoration-none">
                            <div class="card h-100">
                                <div class="card-header">
                                    <h5 class="mb-0"><img :src="user.photo" class="avatar avatar-sm mr-2" :alt="user.fullName">{{ user.fullName }}</h5>
                                </div>
                                <div class="card-body">
                                    {{ user.type | capitalize }}
                                </div>
                            </div>
                        </router-link>
                    </div>
                </template>
            </template>
        </div>
        <custom-modal ref="addUserModal" @ok="addUser" :modalSchema="modalSchemaAddUser" />
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "UserList",
        computed: {
            ...mapGetters([
                'role'
            ]),
        },
        data() {
            return {
                loading: false,
                users: [],
                modalSchemaAddUser: {
                    form: {
                        url: '/api/users',
                        method: 'post',
                        fields: [
                        ],
                        hiddenFields: [],
                        config: {}
                    },
                    modalRef: 'addUser',
                    modalTitle: this.$t('user.add.title'),
                    okBtnTitle: this.$t('modal.register.btn')
                }
            }
        },
        created () {
            this.fetchData();
        },
        methods: {
            fetchData() {
                this.loading = true;
                this.axios.get('/api/users').then((response) => {
                    this.users = response.data.data;
                    this.usersTypeOptions = response.data.meta.usersTypeOptions;
                    this.loading = false;
                });
            },
            addUserModal() {
                this.modalSchemaAddUser.form.fields = [
                    {
                        label: this.$t('user.email'),
                        required: true,
                        name: 'email',
                        input: 'text',
                        type: 'email',
                        value: '',
                        config: {}
                    },
                    {
                        label: this.$t('user.first_name'),
                        required: true,
                        name: 'first_name',
                        input: 'text',
                        type: 'text',
                        value: '',
                        config: {}
                    },
                    {
                        label: this.$t('user.last_name'),
                        required: true,
                        name: 'last_name',
                        input: 'text',
                        type: 'text',
                        value: '',
                        config: {}
                    },
                    {
                        label: this.$t('user.type'),
                        required: true,
                        name: 'type',
                        input: 'select',
                        type: 'select',
                        value: '',
                        config: {
                            options: this.usersTypeOptions,
                            disabledOption: true
                        }
                    },
                ];

                this.$refs['addUserModal'].openModal();
            },
            addUser(response) {
                this.users.push(response.data.data);
            },
        }
    }
</script>
