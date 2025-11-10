<template>
    <section class="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <!-- En-tête de section -->
            <div class="mb-8 sm:mb-12 lg:mb-16 flex justify-center">
                <div class="text-center">
                    <TitleSubtitle
                        :subtitle="$t('service_subtitle')"
                        :title="$t('service_title')"
                    />
                </div>
            </div>

            <!-- Grille des services -->
            <div
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12"
            >
                <!-- Mobile App Development -->
                <div
                    class="no-border text-center group cursor-pointer transition-colors duration-300"
                    v-for="service in services"
                >
                    <div class="flex flex-col items-center p-4 sm:p-6">
                        <Icon
                            :name="service.icon"
                            class="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 duration-500 hover:text-gray-900 hover:translate-y-1 text-blue-500"
                        />

                        <ULink :to="service.to">
                            <h3
                                class="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight"
                            >
                                {{ service.title }}
                            </h3>
                        </ULink>

                        <p
                            class="text-gray-600 text-sm sm:text-base leading-relaxed max-w-sm"
                        >
                            {{ service.subTitle }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex justify-center mt-8 sm:mt-12 lg:mt-16">
                <CustomButton :title="$t('service_button')" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const { $t } = useI18n();

const services = $t("services");
</script>

<style scoped></style>
