<template>
    <UPageHero
        headline="Skills"
        title="Python Development Services"
        orientation="horizontal"
        :ui="{
            root: 'bg-gradient-to-br from-blue-900 via-gray-900 to-black',
            headline: 'text-blue-400 text-sm sm:text-base',
            title: 'text-white text-3xl sm:text-5xl lg:text-7xl',
        }"
    >
        <template #links>
            <div class="flex flex-wrap gap-4 mt-8">
                <CustomButton
                    title="Contact Us"
                    size="xl"
                    variant="solid"
                    @click="showContact = true"
                />
                <CustomButton
                    title="Learn More"
                    size="xl"
                    variant="naked"
                    icon="i-heroicons-arrow-right-20-solid"
                    @click="showContact = true"
                />
            </div>
        </template>

        <ImageComponent src="/logo.png" />
    </UPageHero>

    <!-- Contact Slideover -->
    <Contact v-model:open="showContact" />
</template>

<script setup lang="ts">
const showContact = ref(false);
</script>
