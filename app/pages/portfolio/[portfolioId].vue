<template>
    <div class="w-full flex flex-col gap-12">
        <!-- HERO -->

        <PortfolioHero :projectTitle="project.title" />

        <!-- SECTION GRID -->
        <PortfolioGrid
            :title="project.title"
            :description="project.description"
            :category="project.category"
            :date="project.date"
            :tags="project.tags"
            :client="project.client"
            :follow="project.follow"
        />
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
