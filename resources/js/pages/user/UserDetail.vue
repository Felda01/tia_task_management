<template>
    <div>
        <div class="form-group">
            <label>{{ $t('client.add.logo') }}</label>
            <div class="custom-file">
                <input type="file" class="custom-file-input" :class="{ 'is-invalid': form.errors.has('logo') }" id="customFile" @change="uploadFile">
                <label class="custom-file-label" for="customFile">Choose file</label>
                <has-error :form="form" field="logo" />
            </div>
        </div>
    </div>
</template>

<script>
    import { objectToFormData } from 'object-to-formdata';
    export default {
        name: "UserDetail",
        methods: {
            update() {
                this.form.post('/api/clients', {
                    // Transform form data to FormData
                    transformRequest: [function (data, headers) {
                        return objectToFormData(data)
                    }],
                })
            },
            uploadFile(event) {
                let result = event.target.files;
                if (result && result[0]) {
                    this.form.logo = result[0];
                }
            },
        }
    }
</script>
