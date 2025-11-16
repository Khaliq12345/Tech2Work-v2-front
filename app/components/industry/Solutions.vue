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
            Empowering financial organizations with tailored software solutions
        </template>

        <!-- GRID -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <UCard
                v-for="solution in solutions"
                :key="solution.title"
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
                            :name="solution.icon"
                            class="text-primary w-12 h-12"
                        />
                    </div>

                    <h3 class="text-gray-900 text-xl font-semibold">
                        {{ solution.title }}
                    </h3>
                </template>

                <!-- BODY -->
                <p class="text-gray-700 leading-relaxed">
                    {{ solution.description }}
                </p>
            </UCard>
        </div>
    </UPageSection>
</template>

<script setup lang="ts">
const solutions = [
    {
        icon: "i-lucide-bank",
        title: "Retail and commercial banks",
        description:
            "Strengthen banking operations, compliance and security with custom software tailored to retail and commercial banks. Our solutions enhance decision-making with predictive analytics, support regulatory compliance and drive customer engagement across digital channels.",
    },
    {
        icon: "i-lucide-rocket",
        title: "Fintech startups and scaleups",
        description:
            "Accelerate growth with cloud-native software built for fintech startups and scaleups. Our agile teams help you reduce time-to-market, stay compliant and compete with established financial institutions through innovation and flexibility.",
    },
    {
        icon: "i-lucide-shield-check",
        title: "Insurance companies",
        description:
            "Modernize insurance operations with AI-driven solutions and process automation. Streamline claims management, improve risk assessment and enhance policyholder experience – all while reducing operational costs and increasing efficiency.",
    },
    {
        icon: "i-lucide-line-chart",
        title: "Investment houses",
        description:
            "Optimize portfolio management, trading and analytics with our advanced tools. Gain predictive insights and make informed decisions that enhance returns, minimize risks and provide a competitive edge.",
    },
    {
        icon: "i-lucide-credit-card",
        title: "Payment platforms & processors",
        description:
            "Develop secure and scalable payments solutions tailored to platform providers and processors. From real-time transactions and fraud detection to compliance and gateway integration, we can help you build next-generation payment ecosystems.",
    },
    {
        icon: "i-lucide-bar-chart-3",
        title: "Wealth management firms",
        description:
            "Enhance wealth management services with tailored solutions that offer portfolio optimization and customer insights. Scalable cloud infrastructure supports growth, while robust cybersecurity protects client data and transactions.",
    },
    {
        icon: "i-lucide-banknote",
        title: "Lending institutions",
        description:
            "Improve loan origination, underwriting and servicing processes. Implement data-driven risk assessment and AI-powered credit scoring models that boost decision-making and customer satisfaction.",
    },
];
</script>
