<template>
    <div class="row">
        <div class="col-lg-8 m-auto">
            <div class="card">
                <div class="card-header">
                    {{ $t('reset_password') }}
                </div>
                <div class="card-body">
                    <form @submit.prevent="reset" @keydown="form.onKeydown($event)">
                        <alert-success :form="form" :message="status" />

                        <!-- Email -->
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label text-md-right">{{ $t('email') }}</label>
                            <div class="col-md-7">
                                <input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="email" name="email" readonly>
                                <has-error :form="form" field="email" />
                            </div>
                        </div>

                        <!-- Password -->
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label text-md-right">{{ $t('password') }}</label>
                            <div class="col-md-7">
                                <input v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }" class="form-control" type="password" name="password">
                                <has-error :form="form" field="password" />
                            </div>
                        </div>

                        <!-- Password Confirmation -->
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label text-md-right">{{ $t('confirm_password') }}</label>
                            <div class="col-md-7">
                                <input v-model="form.password_confirmation" :class="{ 'is-invalid': form.errors.has('password_confirmation') }" class="form-control" type="password" name="password_confirmation">
                                <has-error :form="form" field="password_confirmation" />
                            </div>
                        </div>

                        <!-- Submit Button -->
                        <div class="form-group row">
                            <div class="col-md-9 ml-md-auto">
                                <button :disabled="form.busy" class="btn btn-primary">
                                    <span v-if="form.busy" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    {{ $t('reset_password') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Form from 'vform';
    export default {
        name: "Reset",
        data: () => ({
            status: '',
            form: new Form({
                token: '',
                email: '',
                password: '',
                password_confirmation: ''
            })
        }),
        created () {
            this.form.email = this.$route.params.email;
            this.form.token = this.$route.params.token;
        },
        methods: {
            reset () {
                this.form.post('/api/password/reset').then((response) => {
                    this.status = response.data.message;
                    this.form.reset();
                    let interval = setTimeout(() => {
                        this.$router.replace({ name: 'login' });
                    }, 10000)
                });
            }
        }
    }
</script>

<style scoped>

</style>
