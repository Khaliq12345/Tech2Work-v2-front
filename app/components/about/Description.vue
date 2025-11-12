<template>
    <UPageSection
        :title="String($t('description_title') || '')"
        :description="String($t('description_text') || '')"
        :ui="{
            title: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center',
        }"
    />
</template>

<script setup lang="ts">
const { $t } = useI18n();
</script>
