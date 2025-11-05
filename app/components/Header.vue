<template>
    <UHeader
        mode="slideover"
        :toggle="{
            color: 'primary',
            variant: 'outline',
            class: 'rounded-full',
        }"
    >
        <!-- Title -->
        <template #title>
            <div class="text-2xl font-bold">
                <span class="text-gray-900">TECH</span>
                <span class="text-gray-500">2</span>
                <span class="text-gray-900">WORK</span>
            </div>
        </template>

        <!-- Desktop Menu -->
        <UNavigationMenu
            :items="navItems"
            highlight
            highlight-color="primary"
            variant="pill"
        />

        <!-- Mobile Menu  -->
        <template #body>
            <UNavigationMenu
                :items="navItems"
                orientation="vertical"
                class="-mx-2.5"
                highlight
                highlight-color="primary"
                variant="pill"
            />
        </template>
    </UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const navItems: NavigationMenuItem[] = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "Solutions", to: "/solutions" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Story", to: "/story" },
    { label: "Career", to: "/career" },
    { label: "Blog", to: "/blog" },
    { label: "Contact Us", to: "/contact" },
];
</script>

<style scoped></style>
