<template>
    <UPageHero
        :ui="{
            title: 'text-left text-black text-3xl sm:text-4xl',
            description: 'text-left text-gray-600 dark:text-gray-600 text-base',
            links: 'justify-start',
        }"
        orientation="horizontal"
    >
        <ImageComponent src="/logo.png" alt="Company logo" />
        <template #title>
            {{ $t("text1") }}
            <!-- aria-live permet aux lecteurs d'écran de suivre les changements de texte -->
            <span class="text-blue-400" aria-live="polite" aria-atomic="true">{{
                currentWordDisplay
            }}</span>
            <span class="blinking-cursor" aria-hidden="true">|</span>
            <br />
            {{ $t("text2") }}
        </template>

        <template #description>
            {{ $t("text3") }}
        </template>

        <template #links>
            <CustomButton :title="$t('text4')" />
        </template>
    </UPageHero>
</template>

<script setup lang="ts">
const { $t } = useI18n();
// Configuration de l'effet de frappe
const words = [
    $t("type1"),
    $t("type2"),
    $t("type3"),
    $t("type4"),
    $t("type5"),
    $t("type6"),
];
const typingSpeed = 150; // Vitesse de frappe en millisecondes
const deletingSpeed = 100; // Vitesse d'effacement en millisecondes
const pauseDuration = 2000; // Pause après avoir terminé un mot

// Variables réactives pour l'état de l'animation
const wordIndex = ref(0);
const charIndex = ref(0);
const isDeleting = ref(false);
const currentWordDisplay = ref("");

let timeoutId = null;

function typeEffect() {
    const currentFullWord = words[wordIndex.value];

    // Déterminer si on ajoute ou retire un caractère
    if (isDeleting.value) {
        charIndex.value--;
    } else {
        charIndex.value++;
    }

    // Mettre à jour le texte affiché
    currentWordDisplay.value = currentFullWord.substring(0, charIndex.value);

    // Calculer le délai avant la prochaine itération
    let waitTime = isDeleting.value ? deletingSpeed : typingSpeed;

    // Si le mot est complètement tapé, passer en mode effacement
    if (!isDeleting.value && charIndex.value === currentFullWord.length) {
        isDeleting.value = true;
        waitTime = pauseDuration;
    }
    // Si le mot est complètement effacé, passer au mot suivant
    else if (isDeleting.value && charIndex.value === 0) {
        isDeleting.value = false;
        wordIndex.value = (wordIndex.value + 1) % words.length;
    }

    // Programmer la prochaine itération
    timeoutId = setTimeout(typeEffect, waitTime);
}

// Démarrer l'animation au montage du composant
onMounted(() => {
    if (words.length > 0) {
        timeoutId = setTimeout(typeEffect, 200);
    }
});

// Nettoyer le timeout au démontage pour éviter les fuites mémoire
onBeforeUnmount(() => {
    if (timeoutId !== null) {
        clearTimeout(timeoutId);
        timeoutId = null;
    }
});
</script>

<style scoped>
/* Style pour le curseur clignotant */
.blinking-cursor {
    font-weight: 300;
    color: #2e2e2e;
    animation: blink 1s step-end infinite;
    will-change: color;
}

/* Animation de clignotement du curseur */
@keyframes blink {
    from,
    to {
        color: transparent; /* Curseur invisible */
    }
    50% {
        color: inherit; /* Curseur visible */
    }
}
</style>
