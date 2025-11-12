<template>
    <UPageHero
        orientation="vertical"
        :ui="{
            // Le titre s'adapte à la taille de l'écran
            title: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center',
            description: 'text-secondary text-center',
        }"
    >
        <template #title>
            <span>{{ $t('hero_line1') }}</span>
            <p>{{ $t('hero_line2') }} <span class="text-blue-400">{{ $t('hero_highlight') }}</span></p>
        </template>
        <!-- Conteneur image -->
        <template #description>
            <div class="flex items-center justify-center w-full">
                <img
                    src="/logo.png"
                    class="rounded-lg object-contain w-40 sm:w-56 md:w-72 lg:w-96"
                />
            </div>
        </template>
    </UPageHero>
</template>

<script setup lang="ts">
const { $t } = useI18n();
</script>
