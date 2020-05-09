<template>
    <div class="forbidden">
        <h1 class="display-3">{{ $t('error.forbidden.title') }}</h1>
        <h3>{{ $t('error.forbidden.message') }}</h3>
    </div>
</template>

<script>
    export default {
        name: "Forbidden"
    }
</script>
