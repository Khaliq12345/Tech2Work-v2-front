<template>
    <UFooter
        v-motion-pop-visible
        :delay="200"
        :duration="1200"
        class="bg-primary text-white"
    >
        <template #top>
            <div class="flex flex-col items-center text-center space-y-6">
                <!-- Logo section -->
                <div class="flex justify-center">
                    <img
                        src="/logo.png"
                        alt="Portal Logo"
                        class="h-25 w-auto"
                    />
                </div>

                <!-- Tagline -->
                <p class="text-sm tracking-wide">
                    YOUR FASTEST PORTAL TO SUCCESS
                </p>

                <!-- Divider -->
                <USeparator class="w-full max-w-2xl" color="secondary" />

                <!-- Navigation Links -->
                <UNavigationMenu :items="menuItems" variant="link" />

                <!-- Divider -->
                <USeparator class="w-full max-w-2xl" color="secondary" />

                <!-- Social Icons -->
                <div class="flex justify-center gap-3">
                    <UButton
                        v-for="social in socialLinks"
                        :key="social.label"
                        :icon="social.icon"
                        variant="ghost"
                        color="white"
                        :to="social.href"
                        target="_blank"
                        :aria-label="social.label"
                        size="sm"
                    />
                </div>

                <!-- Company Description -->
                <p class="text-xs leading-relaxed max-w-3xl px-4">
                    The Portal Agency is a company headquartered in New York,
                    USA with offices in Europe & Middle East.<br />
                    The Portal is been rated on Facebook & Google 4.9 out of 5
                    by more than 60 reviewers and customers.<br />
                    USA, BROOKLYN, NY 11215
                    <a
                        href="mailto:isd1@theportalagency.com"
                        class="hover:underline"
                        >isd1@theportalagency.com</a
                    >
                    +1 929-350-2260<br />
                    Egypt, Cairo, Maadi Corniche 11431 S. Othman Towers +2 02
                    25244776
                </p>

                <!-- Legal Links -->
                <div class="flex justify-center gap-8 text-xs">
                    <ULink to="#privacy" class="hover:underline"
                        >Privacy Policy</ULink
                    >
                    <ULink to="#terms" class="hover:underline"
                        >Terms and Conditions</ULink
                    >
                </div>
            </div>
        </template>
    </UFooter>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const menuItems: NavigationMenuItem[] = [
    {
        label: "LATEST WORK",
        to: "#latest-work",
    },
    {
        label: "CONTACT US",
        to: "#contact",
    },
];

const socialLinks = [
    {
        icon: "i-simple-icons-facebook",
        href: "https://facebook.com",
        label: "Facebook",
    },
    {
        icon: "i-simple-icons-x",
        href: "https://x.com",
        label: "X (Twitter)",
    },
    {
        icon: "i-simple-icons-instagram",
        href: "https://instagram.com",
        label: "Instagram",
    },
    {
        icon: "i-simple-icons-pinterest",
        href: "https://pinterest.com",
        label: "Pinterest",
    },
    {
        icon: "i-simple-icons-behance",
        href: "https://behance.net",
        label: "Behance",
    },
    {
        icon: "i-simple-icons-linkedin",
        href: "https://linkedin.com",
        label: "LinkedIn",
    },
];
</script>
