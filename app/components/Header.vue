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
    <USlideover
        v-model:open="isContactOpen"
        side="right"
        :title="contactTexts.title"
        close-icon="i-lucide-arrow-left"
        :ui="{
            content: 'w-full p-4 ',
            title: 'text-black dark:text-black',
        }"
        :close="{
            color: 'primary',
            variant: 'ghost',
        }"
    >
        <template #body>
            <UForm
                :schema="schema"
                :state="contactState"
                class="space-y-4 w-full"
                @submit="onContactSubmit"
            >
                <UFormField
                    :label="contactTexts.nameLabel"
                    name="name"
                    :ui="{ label: 'text-black dark:text-black w-full' }"
                >
                    <UInput
                        v-model="contactState.name"
                        :placeholder="contactTexts.namePlaceholder"
                        class="w-full"
                    />
                </UFormField>

                <UFormField
                    :label="contactTexts.emailLabel"
                    name="email"
                    :ui="{ label: 'text-black dark:text-black' }"
                >
                    <UInput
                        v-model="contactState.email"
                        type="email"
                        :placeholder="contactTexts.emailPlaceholder"
                        class="w-full"
                    />
                </UFormField>

                <UFormField
                    :label="contactTexts.messageLabel"
                    name="message"
                    :ui="{ label: 'text-black dark:text-black' }"
                >
                    <UTextarea
                        v-model="contactState.message"
                        :placeholder="contactTexts.messagePlaceholder"
                        class="w-full"
                    />
                </UFormField>

                <UButton
                    type="submit"
                    color="primary"
                    variant="solid"
                    class="text-white"
                >
                    {{ contactTexts.submit }}
                </UButton>
            </UForm>
        </template>
    </USlideover>
</template>

<script setup lang="ts">
import type { NavigationMenuItem, FormSubmitEvent } from "@nuxt/ui";
import * as v from "valibot";
import type {
    ContactFormState,
    ContactTextsMap,
    ContactLocaleKey,
} from "../../types/contact";
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

const schema = v.object({
    name: v.pipe(v.string(), v.minLength(2, "Please enter your name.")),
    email: v.pipe(v.string(), v.email("Please enter a valid email.")),
    message: v.pipe(v.string(), v.minLength(10, "Please enter a message.")),
});

const contactState = reactive<ContactFormState>({
    name: "",
    email: "",
    message: "",
});

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

async function onContactSubmit(event: FormSubmitEvent<ContactFormState>) {
    console.log(event.data);
    isContactOpen.value = false;
}
</script>
