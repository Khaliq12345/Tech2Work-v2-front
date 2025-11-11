<template>
    <UPageHero
        :headline="$t('hero_headline')"
        :title="$t('hero_title')"
        :ui="{
            title: 'text-left text-black text-2xl lg:text-3xl xl:text-4xl font-normal',
            description:
                'text-left text-gray-600 dark:text-gray-600 text-base lg:text-lg',
        }"
        orientation="horizontal"
    >
        <ImageComponent src="/logo.png" class="max-w-sm" />
    </UPageHero>
</template>

<script setup lang="ts">
const { $t } = useI18n();
</script>
