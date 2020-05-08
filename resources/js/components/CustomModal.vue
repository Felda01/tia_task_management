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
                    <template v-if="field.input === 'file'">
                        <div class="d-flex justify-content-between align-items-center">
                            <img :src="field.config.photo" class="avatar avatar-md mr-3" :alt="field.name">
                            <div class="position-relative">
                                <div class="custom-file" :class="{ 'is-invalid': form.errors.has(field.name) }">
                                    <input type="file" class="custom-file-input"  :id="'input-' + field.name" @change="uploadFile" :name="field.name">
                                    <label class="custom-file-label mb-0" :for="'input-' + field.name"><template v-if="fileName">{{ fileName }}</template><template v-else>{{ field.label }}</template></label>
                                    <has-error :form="form" :field="field.name" />
                                </div>
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <label :for="'input-' + field.name">{{ field.label }}{{ field.required ? ' *' : '' }}</label>
                        <div :class="{'custom-file': field.input === 'file'}">
                            <template v-if="field.input === 'text'">
                                <input v-model="form[field.name]" :class="{ 'is-invalid': form.errors.has(field.name) }" :id="'input-' + field.name" class="form-control" :type="field.type" :name="field.name">
                            </template>
                            <template v-else-if="field.input === 'date'">
                                <b-form-datepicker v-model="form[field.name]" :class="{ 'is-invalid': form.errors.has(field.name) }" :id="'input-' + field.name" class="form-control"
                                                   :min="field.config.min ? field.config.min : null" :max="field.config.max ? field.config.max : null"></b-form-datepicker>
                            </template>
                            <template v-else-if="field.input === 'select'">
                                <b-form-select v-model="form[field.name]" :options="field.config.options" class="form-control" :class="{ 'is-invalid': form.errors.has(field.name) }" :id="'input-' + field.name">
                                    <template v-slot:first v-if="field.config.disabledOption">
                                        <b-form-select-option value="" disabled>{{ $t('modal.select.first.option') }}</b-form-select-option>
                                    </template>
                                </b-form-select>
                            </template>
                            <template v-else-if="field.input === 'textarea'">
                                <textarea v-model="form[field.name]" class="form-control" :class="{ 'is-invalid': form.errors.has(field.name) }" :id="'input-' + field.name"></textarea>
                            </template>

                            <has-error :form="form" :field="field.name" />
                        </div>
                    </template>

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
                form: null,
                fileName: ''
            }
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
            uploadFile(event) {
                let result = event.target.files;
                if (result && result[0]) {
                    this.form[event.target.name] = result[0];
                    this.fileName = result[0].name;
                }
            },
            openModal() {
                this.fileName = '';
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
            },
        }
    }
</script>
