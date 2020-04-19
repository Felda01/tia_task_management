<template>
    <div class="custom-modal">
        <b-modal :id="modalSchema.modalRef" :title="modalSchema.modalTitle"
                 @show="resetModal"
                 @hidden="resetModal"
                 @ok="okModal">
            <form @keydown="form.onKeydown($event)" enctype="multipart/form-data" v-if="form">
                <!-- Alert -->
                <alert-error :form="form"></alert-error>

                <!-- Field -->
                <div class="form-group" v-for="(field, index) in modalSchema.form.fields">
                    <label :class="{'custom-file-label': field.input === 'file'}" :for="'input-' + field.name">{{ field.label }}{{ field.required ? ' *' : '' }}</label>
                    <div :class="{'custom-file': field.input === 'file'}">
                        <template v-if="field.input === 'text'">
                            <input v-model="form[field.name]" :class="{ 'is-invalid': form.errors.has(field.name) }" :id="'input-' + field.name" class="form-control" :type="field.type" :name="field.name">
                        </template>
                        <template v-else-if="field.input === 'date'">
                            <b-form-datepicker v-model="form[field.name]" :class="{ 'is-invalid': form.errors.has(field.name) }" :id="'input-' + field.name" class="form-control"></b-form-datepicker>
                        </template>
                        <template v-else-if="field.input === 'select'">
                            <b-form-select v-model="form[field.name]" :options="field.config.options" :class="{ 'is-invalid': form.errors.has(field.name) }" :id="'input-' + field.name" />
                        </template>
                        <template v-else-if="field.input === 'file'">
                            <input type="file" class="custom-file-input" :class="{ 'is-invalid': form.errors.has(field.name) }" :id="'input-' + field.name" @change="uploadFile(field.name)">
                        </template>

                        <has-error :form="form" :field="field.name" />
                    </div>
                </div>
            </form>
            <template v-slot:modal-footer="{ ok, cancel }" v-if="form">
                <button :disabled="form.busy" class="btn btn-primary" @click="ok()">
                    <span v-if="form.busy" class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
                    {{ modalSchema.okBtnTitle }}
                </button>
                <button class="btn btn-danger" @click="cancel()">{{ $t('cancel')}}</button>
            </template>
        </b-modal>
    </div>
</template>

<script>
    import Form from 'vform';

    export default {
        name: "CustomModal",
        props: {
            modalSchema: {
                type: Object,
                required: true
            },
        },
        data() {
            return {
                form: null
            }
        },
        mounted() {
        },
        methods: {
            resetModal() {
                if (this.form) {
                    this.form.reset();
                }
            },
            okModal(bvModalEvt) {
                bvModalEvt.preventDefault();

                this.form.submit(this.modalSchema.form.method, this.modalSchema.form.url, this.modalSchema.form.config).then(response => {
                    this.$emit('ok', response);

                    this.$nextTick(() => {
                        this.$bvModal.hide(this.modalSchema.modalRef);
                    });
                });
            },
            uploadFile(event, field) {
                let result = event.target.files;
                if (result && result[0]) {
                    this.form[field] = result[0];
                }
            },
            openModal() {
                let fields = {};
                for (let i = 0; i < this.modalSchema.form.fields.length; i++) {
                    let field = this.modalSchema.form.fields[i];
                    fields[field.name] = field.value;
                }
                for (let i = 0; i < this.modalSchema.form.hiddenFields.length; i++) {
                    let field = this.modalSchema.form.hiddenFields[i];
                    fields[field.name] = field.value;
                }
                this.form = new Form(fields);

                this.$bvModal.show(this.modalSchema.modalRef);
            }
        }
    }
</script>
