<template>
    <UPageSection class="bg-white">
        <UPageCTA
            title="Partner With Dev.co"
            description="Are you ready to learn more about Python development? Or are you interested in a free quote? Contact DEV.co for more information or a free consultation today!"
            variant="naked"
            orientation="horizontal"
            :ui="{
                title: 'text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 sm:text-left text-center',
                description:
                    'text-gray-600 mt-4 text-sm sm:text-base sm:text-left text-center',
                container:
                    'flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-8 sm:gap-12',
                links: 'flex justify-center lg:justify-start mt-6',
            }"
        >
            <template #links>
                <CustomButton
                    title="Tell Us About Your Next Project"
                    size="xs"
                    class="text-xs px-3 py-1.5 sm:text-sm sm:px-4 sm:py-2 lg:text-base lg:px-5 lg:py-2.5"
                    @click="showContact = true"
                />
            </template>

            <img
                src="/logo.png"
                alt="Logo"
                class="w-full max-w-xs sm:max-w-md mx-auto rounded-lg"
            />
        </UPageCTA>
    </UPageSection>

    <!-- Contact Slideover -->
    <Contact v-model:open="showContact" />
</template>

<script setup lang="ts">
const showContact = ref(false);
</script>
