<template>
    <UPageSection
        title="What Makes Python Development So Popular?"
        description="Python development is incredibly popular for a few important reasons:"
        :ui="{
            root: 'bg-white text-gray-900 py-16',
            title: 'text-gray-900 text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6',
            description: 'text-gray-600 text-sm sm:text-base text-center mb-12',
        }"
    >
        <UPageGrid
            class="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-6 sm:mt-12"
        >
            <div
                v-for="(feature, index) in features"
                :key="index"
                class="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-lg hover:border-gray-300 transition-colors"
            >
                <!-- Icône -->
                <div class="mb-4">
                    <UIcon :name="feature.icon" class="h-8 w-8 text-blue-400" />
                </div>

                <!-- Contenu -->
                <div class="space-y-3">
                    <h3 class="text-sm font-semibold text-gray-900 sm:text-base">
                        {{ feature.title }}
                    </h3>
                    <p class="text-xs text-gray-600 leading-relaxed sm:text-xs">
                        {{ feature.description }}
                    </p>
                </div>
            </div>
        </UPageGrid>
    </UPageSection>
</template>

<script setup lang="ts">
const features = ref([
    {
        title: "Versatility",
        description:
            "Python is platform-agnostic, meaning it can be used on any platform, regardless of the operating system. You can use a single code base to build any type of project, and because Python code is so flexible, you can use it to build almost anything. A python developer only has to write code once, and it will run across multiple systems regardless.",
        icon: "i-lucide-code",
    },
    {
        title: "Readability",
        description:
            "Python is also popular for its readability. While some programming languages are very technical and hard to parse (especially at a glance), Python tries to make it easy for developers to examine their code and identify possible mistakes. This makes it much easier to fundamentally understand how the application works, identify areas for improvement, and catch bugs.",
        icon: "i-lucide-code",
    },
    {
        title: "Community Support",
        description:
            "Python has one of the largest and most active developer communities in the world. This means extensive libraries, frameworks, and resources are readily available, making it easier to find solutions and collaborate with other developers.",
        icon: "i-lucide-code",
    },
    {
        title: "Extensive Libraries",
        description:
            "Python offers a rich ecosystem of libraries and frameworks for various domains including web development, data science, machine learning, automation, and more, allowing developers to build complex applications efficiently.",
        icon: "i-lucide-code",
    },
]);
</script>
