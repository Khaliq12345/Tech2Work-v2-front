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
        <!-- Mobile Menu -->
        <template #body>
            <UNavigationMenu
                :items="navItems"
                orientation="vertical"
                class="-mx-2.5"
                highlight
                highlight-color="primary"
                variant="pill"
            />
            <div class="mt-4">
                <UButton
                    block
                    color="primary"
                    variant="solid"
                    class="w-full text-white"
                    @click="isContactOpen = true"
                >
                    {{ contactTexts.openButton }}
                </UButton>
            </div>
        </template>
        <template #right>
            <UButton
                variant="solid"
                color="primary"
                class="hidden text-white md:inline-flex"
                @click="isContactOpen = true"
            >
                {{ contactTexts.openButton }}
            </UButton>
            <UButton
                variant="solid"
                color="white"
                class="text-black"
                v-for="locale_temp in $getLocales()"
                :key="locale_temp.code"
                @click="$switchLocale(locale_temp.code)"
            >
                {{ locale_temp.code }}
            </UButton>
        </template>
    </UHeader>
    <Contact v-model:open="isContactOpen" />
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import type { ContactTextsMap, ContactLocaleKey } from "~/types/contact";
const { $t, $getLocales, $switchLocale, $getLocale } = useI18n();
const nuxtLocale = useLocale() as any;
const locale = computed<string>(() => {
    if (typeof nuxtLocale === "string") {
        return nuxtLocale;
    }
    if (nuxtLocale && typeof nuxtLocale.value === "string") {
        return nuxtLocale.value;
    }
    return $getLocale();
});
const navItems: NavigationMenuItem[] = computed(() => [
    { label: "Home", to: `/${locale.value}` },
    { label: "Services", to: `/${locale.value}/services/` },
    { label: "Portfolio", to: `/${locale.value}/portfolios/` },
    { label: "About", to: `/${locale.value}/about` },
    { label: "Contact Us", to: `/${locale.value}/contact/` },
]);

const isContactOpen = ref(false);

const langueFields = reactive<ContactTextsMap>({
    en: {
        openButton: "Contact",
        title: "Contact Us",
        nameLabel: "Name",
        namePlaceholder: "Enter your name",
        emailLabel: "Email",
        emailPlaceholder: "Enter your email",
        messageLabel: "Message",
        messagePlaceholder: "Please enter a message.",
        submit: "Send",
    },
    fr: {
        openButton: "Contact",
        title: "Contactez-nous",
        nameLabel: "Nom",
        namePlaceholder: "Entrez votre nom",
        emailLabel: "E-mail",
        emailPlaceholder: "Entrez votre e-mail",
        messageLabel: "Message",
        messagePlaceholder: "Veuillez saisir un message.",
        submit: "Envoyer",
    },
});

const contactTexts = computed(() => {
    const code: ContactLocaleKey = locale.value?.startsWith("fr") ? "fr" : "en";
    return langueFields[code];
});
</script>
