<template>
    <section class="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <!-- En-tête de section -->
            <div class="mb-8 sm:mb-12 lg:mb-16 flex justify-center">
                <div class="text-center">
                    <TitleSubtitle subtitle="WHAT WE DO" title="Our Services" />
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

                        <h3
                            class="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight"
                        >
                            {{ service.title }}
                        </h3>

                        <p
                            class="text-gray-600 text-sm sm:text-base leading-relaxed max-w-sm"
                        >
                            {{ service.subTitle }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex justify-center mt-8 sm:mt-12 lg:mt-16">
                <CustomButton title="Get Your Service!" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const services = [
    {
        title: "Web Design & Development",
        subTitle:
            "The web can be a huge leap in your business growth, let us help you get you a very own web site.",
        icon: "heroicons:computer-desktop",
    },
    {
        title: "Media production",
        subTitle:
            "Create mind blowing visuals, and engage with your audience emotionally, guiding them to your goal.",
        icon: "heroicons:camera",
    },
    {
        title: "Digital Marketing",
        subTitle:
            "Organic or paid, we use all the available approaches to make effective online campings.",
        icon: "heroicons:chart-bar",
    },
    {
        title: "Branding",
        subTitle:
            "Every business needs a unique identity, distinguishing it from its competitors. WE DO THAT PERFECTLY.",
        icon: "heroicons:pencil",
    },
    {
        title: "Advertising Design",
        subTitle:
            "Whatever you want to achieve; we research, plan, consider market needs in your campaigns.",
        icon: "heroicons:photo",
    },
    {
        title: "Mobile Application Development",
        subTitle:
            "Interact with your users efficiently, with our strategic UI/UX design process.",
        icon: "heroicons:device-phone-mobile",
    },
];
</script>

<style scoped></style>
