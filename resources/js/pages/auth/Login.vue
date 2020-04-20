<template>
    <div class="login">
        <div class="card">
            <div class="card-header">
                {{ $t('login') }}
            </div>
            <div class="card-body">
                <form @submit.prevent="login" @keydown="form.onKeydown($event)">
                    <!-- Email -->
                    <div class="form-group row">
                        <label class="col-md-3 col-form-label text-md-right">{{ $t('email') }}</label>
                        <div class="col-md-7">
                            <input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="email" name="email">
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

                    <!-- Remember Me -->
                    <div class="form-group row">
                        <div class="col-md-3" />
                        <div class="col-md-7 d-flex">
                            <div class="custom-control custom-checkbox d-flex">
                                <input v-model="remember" id="remember" name="remember" type="checkbox" class="custom-control-input">
                                <label for="remember" class="custom-control-label my-auto">
                                    {{ $t('remember_me') }}
                                </label>
                            </div>

<!--                            <router-link :to="{ name: 'password.request' }" class="small ml-auto my-auto">-->
<!--                                {{ $t('forgot_password') }}-->
<!--                            </router-link>-->
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-md-7 offset-md-3 d-flex">
                            <!-- Submit Button -->
                            <button :disabled="form.busy" class="btn btn-primary">
                                <span v-if="form.busy" class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
                                {{ $t('login') }}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import Form from 'vform';

    export default {
        name: "Login",
        data: () => ({
            form: new Form({
                email: '',
                password: ''
            }),
            remember: false
        }),
        methods: {
            login () {
                this.form.post('/api/login')
                    .then(response => {
                        let payload = {
                            token: response.data.token,
                            expiresIn: response.data.expiresIn
                        };

                        this.$store.dispatch('setToken', payload).then(() => {
                            this.$router.push(this.$route.query.redirect || { name: 'dashboard' });
                        });
                    })
                    .catch(e => {

                    });
            }
        }
    }
</script>
