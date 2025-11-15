<template>
    <UPageSection
        :ui="{
            root: 'bg-white',
            container: 'px-4 sm:px-8 lg:px-16 py-20',
            wrapper: 'max-w-7xl mx-auto',
            title: 'text-2xl sm:text-4xl font-semibold text-gray-900 text-center mb-12',
        }"
    >
        <!-- TITLE -->
        <template #title>
            Our financial sector software development services
        </template>

        <!-- GRID -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <UCard
                v-for="service in services"
                :key="service.title"
                variant="outline"
                :ui="{
                    header: 'p-6 flex items-center gap-4',
                    body: 'px-6',
                    footer: 'hidden',
                }"
            >
                <!-- HEADER -->
                <template #header>
                    <div
                        class="w-20 h-20 p-4 rounded-full flex items-center justify-center shadow-lg"
                    >
                        <UIcon
                            :name="service.icon"
                            class="text-primary w-12 h-12"
                        />
                    </div>

                    <h3 class="text-gray-900 text-xl font-semibold">
                        {{ service.title }}
                    </h3>
                </template>

                <!-- BODY -->
                <p class="text-gray-700 leading-relaxed">
                    {{ service.description }}
                </p>
            </UCard>
        </div>
    </UPageSection>
</template>

<script setup lang="ts">
const services = [
    {
        icon: "i-lucide-dollar-sign",
        title: "Wealth management solutions",
        description:
            "Develop custom WealthTech solutions that elevate digital engagement, enhance financial advisory services and seamlessly integrate into your wealth management ecosystem.",
    },
    {
        icon: "i-lucide-smartphone",
        title: "Mobile banking solutions",
        description:
            "Build secure, intuitive mobile banking apps with digital wallets, mobile payments and peer-to-peer transfers.",
    },
    {
        icon: "i-lucide-banknote",
        title: "Digital banking platform integration",
        description:
            "Deliver customer-centric digital banking platforms that provide seamless, personalized and engaging experiences.",
    },
    {
        icon: "i-lucide-cog",
        title: "Customized development & consultancy",
        description:
            "Ensure compliance, security and performance with tailored solutions and expert consultancy.",
    },
    {
        icon: "i-lucide-sun",
        title: "Open banking",
        description:
            "Provide frictionless and secure experiences by safely integrating with third-party providers.",
    },
    {
        icon: "i-lucide-cloud",
        title: "Cloud services",
        description:
            "Optimize financial operations with secure, scalable and cost-effective cloud solutions.",
    },
];
</script>
