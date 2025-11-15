<template>
    <UPageHero class="hero" :ui="ui">
        <!-- SLOT HEADLINE -->
        <template #headline>
            <div class="flex items-center justify-center gap-2">
                <img src="/test1.png" alt="logo" class="h-16 w-auto" />
            </div>
        </template>

        <!-- SLOT TITLE -->
        <template #title>
            {{ $t("Financial Software Development & Consulting Services") }}
        </template>

        <!-- SLOT DESCRIPTION -->
        <template #description>
            {{
                $t(
                    "Design and implementation of financial software that enhances security, boosts efficiency, and delivers exceptional customer experiences - all while accelerating your digital transformation.",
                )
            }}
        </template>

        <!-- SLOT LINKS -->
        <template #links>
            <UButton v-for="link in links" :key="link.label" v-bind="link" />
        </template>
    </UPageHero>
</template>

<script setup lang="ts">
const { $t } = useI18n();

const ui = {
    headline: "text-white tracking-widest",
    title: "text-3xl text-white",
    description: "mx-auto text-bold text-white/90 mt-4",
    links: "text-primary mt-6",
};

const links = computed(() => [
    {
        label: String($t("Contact Us ")),
        to: "/docs/getting-started",
        trailingIcon: "i-lucide-arrow-right",
        color: "info",
        variant: "solid",
        size: "xl",
    },
]);
</script>

<style lang="css">
.hero {
    background-image: url("https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
}
.hero * {
    position: relative;
    z-index: 2;
}
</style>
