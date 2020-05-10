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
                <div class="col-12 mb-4 d-flex flex-lg-row flex-column justify-content-lg-between align-items-lg-center">
                    <h1 class="d-flex align-items-center mb-lg-0 mb-3"><img :src="user.photo" class="avatar avatar-md mr-2" :alt="user.fullName">{{ user.fullName }}</h1>
                    <button v-if="owner" class="btn btn-outline-primary" @click="editUserModal">{{ $t('user.edit.btn') }}</button>
                    <button v-if="!owner && isSenior" class="btn btn-outline-danger" @click="removeUser">{{ $t('user.remove.btn') }}</button>
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
                            <button v-if="user.type === 'junior' && isSenior" class="btn btn-outline-primary" @click="editUserTypeModal">{{ $t('user.type.edit.btn') }}</button>
                        </div>
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <p class="mb-0">{{ user.type | capitalize}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 col-12">
                    <div class="card mb-4" v-if="owner">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5 class="mb-0">{{ $t('user.show.notifications') }}</h5>
                            <button v-if="user.notifications && user.notifications.length > 0" class="btn btn-outline-primary btn-sm" @click="removeAllNotifications">{{ $t('user.notifications.removeAll') }}</button>
                        </div>
                        <div class="card-body">
                            <template v-if="user.notifications && user.notifications.length > 0">
                                <div v-for="(notification, index) in user.notifications" class="p-3" :class="{'border-bottom': index < user.notifications.length - 1}">
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <p class="mb-0"><router-link :to="{ name: 'tasks.show', params: { id: notification.task.id } }" class="text-decoration-none">{{ notification.task.project.slug }}: {{ notification.task.title }}</router-link> - {{ new Date(notification.created_at) | date('DD.MM.YYYY HH:mm') }}</p>
                                        <button class="btn btn-outline-danger btn-sm" @click="removeNotification(notification)">X</button>
                                    </div>
                                    <p class="mb-0">{{ notification.message }}</p>
                                </div>
                            </template>
                            <template v-else>
                                {{ $t('user.notifications.no_notifications') }}
                            </template>
                        </div>
                    </div>
                </div>

                <!-- Edit user type modal -->
                <custom-modal ref="editUserTypeModal" @ok="editUserType" :modalSchema="modalSchemaEditUserType" />

                <!-- Edit user modal -->
                <custom-modal ref="editUserModal" @ok="editUser" :modalSchema="modalSchemaEditUser" />
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
                'isSenior'
            ]),
        },
        data() {
            return {
                loading: false,
                user: null,
                errorCode: 0,
                modalSchemaEditUser: {
                    form: {
                        url: '/api/users/' + this.$route.params.id,
                        method: 'post',
                        fields: [],
                        hiddenFields: [],
                        config: {
                            // Transform form data to FormData
                            transformRequest: [function (data, headers) {
                                return objectToFormData(data)
                            }],
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            },
                        }
                    },
                    modalRef: 'editUser',
                    modalTitle: this.$t('user.edit.title'),
                    okBtnTitle: this.$t('modal.edit.btn')
                },
                modalSchemaEditUserType: {
                    form: {
                        url: '/api/users/' + this.$route.params.id + '/position',
                        method: 'put',
                        fields: [],
                        hiddenFields: [],
                        config: {}
                    },
                    modalRef: 'editUserType',
                    modalTitle: this.$t('user.type.edit.title'),
                    okBtnTitle: this.$t('modal.edit.btn')
                },
                removeUserMessageBoxOptions: {
                    title: this.$t('modalWarning'),
                    okVariant: 'success',
                    cancelVariant: 'danger',
                },
                removeNotificationMessageBoxOptions: {
                    title: this.$t('modalWarning'),
                    okVariant: 'success',
                    cancelVariant: 'danger',
                },
                removeAllNotificationMessageBoxOptions: {
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
                this.axios.get('/api/users/' + this.$route.params.id).then((response) => {
                    this.user = response.data.data;
                    this.usersTypeOptions = response.data.meta.usersTypeOptions;
                    this.loading = false;
                }).catch(error => {
                    this.errorCode = error.response.status;
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
                        value: this.user.email,
                        config: {}
                    },
                    {
                        label: this.$t('user.first_name'),
                        required: true,
                        name: 'first_name',
                        input: 'text',
                        type: 'text',
                        value: this.user.first_name,
                        config: {}
                    },
                    {
                        label: this.$t('user.last_name'),
                        required: true,
                        name: 'last_name',
                        input: 'text',
                        type: 'text',
                        value: this.user.last_name,
                        config: {}
                    },
                    {
                        label: this.$t('user.new.photo'),
                        required: false,
                        name: 'photo',
                        input: 'file',
                        type: 'file',
                        value: null,
                        config: {
                            photo: this.user.photo
                        }
                    },
                ];

                this.modalSchemaEditUser.form.hiddenFields = [
                    {name: '_method', value: "PUT"},
                ];

                this.$refs['editUserModal'].openModal();
            },
            editUser(response) {
                this.user = response.data.data;
                this.$store.dispatch('getUser');
            },
            editUserTypeModal() {
                let options = [];
                let self = this

                options = _.filter(this.usersTypeOptions, function(optionElement) {
                    return optionElement.value !== self.user.type;
                });

                this.modalSchemaEditUserType.form.fields = [
                    {
                        label: this.$t('user.type'),
                        required: true,
                        name: 'type',
                        input: 'select',
                        type: 'select',
                        value: 'senior',
                        config: {
                            options: options
                        }
                    },
                ];

                this.$refs['editUserTypeModal'].openModal();
            },
            editUserType(response) {
                this.user = response.data.data;
                this.$store.dispatch('getUser');
            },
            removeUser() {
                this.$bvModal.msgBoxConfirm(this.$t('user.removeMessage'), this.removeUserMessageBoxOptions).then(value => {
                    if (value) {
                        this.axios.delete('/api/users/' + this.user.id).then(response => {
                            this.$router.replace({ name: 'users' });
                        });
                    }
                });
            },
            removeNotification(notification) {
                this.$bvModal.msgBoxConfirm(this.$t('notification.removeMessage'), this.removeNotificationMessageBoxOptions).then(value => {
                    if (value) {
                        this.axios.delete('/api/notifications/' + notification.id).then(response => {
                            this.user.notifications = _.filter(this.user.notifications, function(notificationElement) {
                                return notificationElement.id !== notification.id;
                            });
                        }).catch(error => {
                            this.$bvModal.msgBoxOk(error.response.data.message, {
                                okVariant: 'danger'
                            });
                        });
                    }
                });
            },
            removeAllNotifications() {
                if (this.userId) {
                    this.$bvModal.msgBoxConfirm(this.$t('notification.removeAllMessage'), this.removeAllNotificationMessageBoxOptions).then(value => {
                        if (value) {
                            this.axios.delete('/api/users/' + this.userId + '/notifications').then(response => {
                                this.user.notifications = [];
                            }).catch(error => {
                                console.log(error.response);
                                this.$bvModal.msgBoxOk(error.response.data.status, {
                                    okVariant: 'danger'
                                });
                            });
                        }
                    });
                }
            }
        },
    }
</script>
