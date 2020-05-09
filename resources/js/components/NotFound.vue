<template>
    <div class="forbidden">
        <h1 class="display-3">{{ $t('error.notFound.title') }}</h1>
        <h3>{{ $t('error.notFound.message') }}</h3>
    </div>
</template>

<script>
    export default {
        name: "NotFound"
    }
</script>
