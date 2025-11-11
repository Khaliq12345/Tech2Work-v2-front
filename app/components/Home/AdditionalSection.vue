<template>
    <UPageCTA
        :title="$t('addtitional_title')"
        orientation="horizontal"
        reverse
        :ui="{
            wrapper: 'p-0 text-center lg:text-left',
            title: 'text-1xl lg:text-3xl font-bold text-primary',
            links: 'justify-center lg:justify-start',
        }"
    >
        <ImageComponent src="/logo.png" class="max-w-sm" />
        <template #links>
            <CustomButton :title="$t('service_button')" />
        </template>
    </UPageCTA>
</template>

<script setup lang="ts">
const { $t } = useI18n();
</script>
