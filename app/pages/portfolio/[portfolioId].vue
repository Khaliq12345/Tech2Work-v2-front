<template>
    <div class="w-full flex flex-col gap-12">
        <!-- HERO -->

        <PortfolioHero :projectTitle="project.title" />

        <!-- SECTION GRID -->
        <div class="container px-6 my-16">
            <UPageGrid class="grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Colonne gauche -->
                <UPageCard
                    class="lg:col-span-2"
                    spotlight
                    spotlight-color="primary"
                >
                    <template #header>
                        <h2 class="text-3xl text-primary font-bold mb-2">
                            {{ project.title }}
                        </h2>
                    </template>

                    <template #description>
                        <div class="w-11 h-1 bg-primary"></div>
                    </template>

                    <template #default>
                        <p
                            class="text-gray-700 leading-relaxed whitespace-pre-line"
                        >
                            {{ project.description }}
                        </p>
                    </template>
                </UPageCard>

                <!-- Colonne droite -->
                <UPageCard spotlight spotlight-color="primary">
                    <template #header>
                        <h3 class="text-2xl font-bold text-primary mb-2">
                            Info
                        </h3>
                    </template>

                    <template #description>
                        <div class="w-11 h-1 bg-primary mb-6"></div>
                    </template>

                    <template #footer>
                        <UPageList divide>
                            <UPageCard
                                v-for="(item, index) in infoList"
                                :key="index"
                                variant="ghost"
                            >
                                <template #body>
                                    <div>
                                        <p class="font-semibold text-gray-600">
                                            {{ item.label }}
                                        </p>

                                        <div
                                            v-if="item.type === 'tags'"
                                            class="flex flex-wrap gap-2 mt-1"
                                        >
                                            <UBadge
                                                v-for="tag in item.value"
                                                :key="tag"
                                                color="primary"
                                                variant="soft"
                                            >
                                                {{ tag }}
                                            </UBadge>
                                        </div>

                                        <div
                                            v-else-if="item.type === 'links'"
                                            class="flex flex-wrap gap-2 mt-1"
                                        >
                                            <UButton
                                                v-for="(
                                                    link, idx
                                                ) in item.value"
                                                :key="idx"
                                                :icon="link.icon"
                                                color="neutral"
                                                variant="ghost"
                                                :to="link.url"
                                                target="_blank"
                                                :aria-label="link.label"
                                                size="sm"
                                            />
                                        </div>

                                        <p v-else class="text-gray-800 mt-1">
                                            {{ item.value }}
                                        </p>
                                    </div>
                                </template>
                            </UPageCard>
                        </UPageList>
                    </template>
                </UPageCard>
            </UPageGrid>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Portfolio } from "~/types/portfolio.d";

const project: Portfolio = {
    title: "Orchidia Meeting Room Mobile APP",
    description: `Orchidia is one of the most impactful companies in the pharmaceutical field in Egypt.
They aim to enhance healthcare professionals' knowledge and provide developed healthcare services to patients
with up-to-date trends and best healthcare practices. According to these goals, we cooperate with them to create
a new platform specialized in hosting meetings with a practical dashboard. This Application is the first step to
facilitating the internal workflow. This step was very impactful in enhancing the whole process inside the company
and organizing even the external meetings more professionally and safely. This became true with our talented team
of developers who worked on the project in a short time frame with a very professional approach that finalized
a user-friendly Application.`,
    category: "Mobile Apps",
    date: "09/02/2023",
    tags: ["App Development", "Mobile Apps"],
    client: "Orchidia Pharmaceutical Industries",
    follow: [
        {
            label: "Instagram",
            icon: "i-simple-icons-instagram",
            url: "https://instagram.com/orchidia",
        },
        {
            label: "LinkedIn",
            icon: "i-simple-icons-linkedin",
            url: "https://linkedin.com/company/orchidia",
        },
    ],
};

// 🔹 Liste dynamique des infos
const infoList = [
    { label: "Category", value: project.category },
    { label: "Date", value: project.date },
    { label: "Tags", value: project.tags, type: "tags" },
    { label: "Client", value: project.client },
    { label: "Follow", value: project.follow, type: "links" },
];
</script>
