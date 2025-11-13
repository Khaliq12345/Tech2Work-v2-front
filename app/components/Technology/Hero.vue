<template>
    <UPageHero
        :headline="headline"
        :title="title"
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
                    :title="appointmentLabel"
                    size="xl"
                    variant="solid"
                    @click="showContact = true"
                />
            </div>
        </template>

        <ImageComponent :src="coverImage" :alt="coverAlt" />
    </UPageHero>

    <!-- Contact Slideover -->
    <Contact v-model:open="showContact" />
</template>

<script setup lang="ts">
defineProps<{
    headline: string;
    title: string;
    coverImage: string;
    coverAlt: string;
}>();

const { $getLocale } = useI18n();

const appointmentLabel = computed(() =>
    $getLocale() === "fr" ? "Prendre un rendez-vous" : "Make An Appointment",
);

const showContact = ref(false);
</script>
