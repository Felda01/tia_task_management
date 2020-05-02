<template>
    <div class="user-detail">
        <div class="row">
            <template v-if="loading">
                <div class="col-12">
                    <content-placeholders class="mb-4">
                        <content-placeholders-heading :img="true" />
                    </content-placeholders>
                </div>
                <div class="col-md-4 col-12">
                    <content-placeholders class="mb-4">
                        <content-placeholders-heading  />
                        <content-placeholders-text :lines="3" />
                    </content-placeholders>
                    <content-placeholders class="mb-4">
                        <content-placeholders-heading  />
                        <content-placeholders-text :lines="2" />
                    </content-placeholders>
                </div>
                <div class="col-md-8 col-12">
                    <content-placeholders class="mb-4">
                        <content-placeholders-heading  />
                        <content-placeholders-text :lines="8" />
                    </content-placeholders>
                </div>
            </template>
            <template v-else-if="user">
                <div class="col-12 mb-4 d-flex justify-content-between">
                    <h1 class="d-flex align-items-center"><img :src="user.photo" class="avatar avatar-md mr-2" :alt="user.fullName">{{ user.fullName }}</h1>
                    <button v-if="owner" class="btn btn-outline-primary" @click="editUserModal">{{ $t('user.edit.btn') }}</button>
                </div>
                <div class="col-lg-4 col-12">
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5 class="mb-0">{{ $t('user.show.detail') }}</h5>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-4 col-md-5">{{ $t('user.full_name') }}:</div>
                                <div class="col-lg-8 col-md-7">{{ user.fullName }}</div>
                            </div>
                            <div class="row">
                                <div class="col-lg-4 col-md-5">{{ $t('user.email') }}:</div>
                                <div class="col-lg-8 col-md-7">{{ user.email }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5 class="mb-0">{{ $t('user.show.position') }}</h5>
                            <button v-if="user.type === 'junior' && role === 'senior'" class="btn btn-outline-primary" @click="editUserTypeModal">{{ $t('user.type.edit.btn') }}</button>
                        </div>
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <p class="mb-0">{{ user.type | capitalize}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 col-12">

                </div>
            </template>
        </div>
    </div>
</template>

<script>
    import { objectToFormData } from 'object-to-formdata';
    import { mapGetters } from 'vuex';

    export default {
        name: "UserDetail",
        computed: {
            owner() {
                return this.user && this.user.id === this.userId;
            },
            ...mapGetters([
                'userId',
                'role'
            ]),
        },
        data() {
            return {
                loading: false,
                user: null,
                modalSchemaEditUser: {
                    form: {
                        url: '/api/users/' + this.$route.params.id,
                        method: 'put',
                        fields: [],
                        hiddenFields: [],
                        config: {
                            // Transform form data to FormData
                            transformRequest: [function (data, headers) {
                                return objectToFormData(data)
                            }],
                        }
                    },
                    modalRef: 'editClient',
                    modalTitle: this.$t('client.edit.title'),
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
                this.axios.get('/api/users/' + this.$route.params.id).then((response) => {
                    this.user = response.data.data;
                    this.loading = false;
                });
            },
            editUserModal() {
                this.modalSchemaEditUser.form.fields = [
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
                ];
            },
            editUser(response) {
                this.user = response.data.data;
            },
            editUserTypeModal() {

            },
            editUserType(response) {
                this.user = response.data.data;
            }
        },
    }
</script>
