<template>
    <div class="row">
        <div class="col-lg-8 m-auto">
            <div class="card">
                <div class="card-header">
                    {{ $t('reset_password') }}
                </div>
                <div class="card-body">
                    <form @submit.prevent="send" @keydown="form.onKeydown($event)">
                        <alert-success :form="form" :message="status" />

                        <!-- Email -->
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label text-md-right">{{ $t('email') }}</label>
                            <div class="col-md-7">
                                <input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="email" name="email">
                                <has-error :form="form" field="email" />
                            </div>
                        </div>

                        <!-- Submit Button -->
                        <div class="form-group row">
                            <div class="col-md-9 ml-md-auto">
                                <button :disabled="form.busy" class="btn btn-primary">
                                    <span v-if="form.busy" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    {{ $t('send_password_reset_link') }}
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
    import Form from 'vform'
    export default {
        name: "Email",
        data: () => ({
            status: '',
            form: new Form({
                email: ''
            })
        }),
        methods: {
            send () {
                this.form.post('/api/password/email').then((response) => {
                    this.status = response.data.status;
                    this.form.reset()
                });
            }
        }
    }
</script>
