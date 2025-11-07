<template>
    <UPageSection>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="space-y-6">
                <h2 class="text-3xl font-bold text-gray-900">
                    Nos <span class="text-gray-600">expertises</span>
                </h2>
                <div class="space-y-4 text-gray-900">
                    <p>
                        Nous vous accompagnons tout au long de votre processus
                        de développement de votre application web pour créer des
                        interfaces qui vous correspondent le plus.
                    </p>
                    <p>
                        En utilisant des méthodologies agiles avancées et en
                        travaillant en étroite collaboration, nous développons
                        des solutions adaptées à vos enjeux et à votre business.
                    </p>
                </div>
                <CustomButton title="Prendre rendez-vous" />
            </div>
            <div class="space-y-4">
                <div
                    v-for="(item, index) in expertiseItems1"
                    :key="index"
                    class="border-t border-gray-200 pt-4"
                >
                    <h3 class="text-lg font-semibold text-gray-900">
                        {{ item }}
                    </h3>
                </div>
            </div>
            <div class="space-y-4">
                <div
                    v-for="(item, index) in expertiseItems2"
                    :key="index"
                    class="border-t border-gray-200 pt-4"
                >
                    <h3 class="text-lg font-semibold text-gray-900">
                        {{ item }}
                    </h3>
                </div>
            </div>
        </div>
    </UPageSection>
</template>

<script setup lang="ts">
const expertiseItems1 = [
    "Plateforme web",
    "Back office",
    "Solution SaaS",
    "Extranet",
];

const expertiseItems2 = [
    "Application métier",
    "Open source",
    "Logiciels IoT",
    "Espace adhérent",
];
</script>
