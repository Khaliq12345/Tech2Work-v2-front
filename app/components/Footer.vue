<template>
  <Contact v-model:open="open" />
  <UFooter class="bg-primary text-white w-full">
    <template #top>
      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <!-- Brand Column -->
          <div class="md:col-span-2 space-y-4">
            <img src="/logo.png" alt="Portal Logo" class="h-16 w-auto" />
            <p class="text-sm font-medium tracking-wide">
              {{
                locale == "en"
                  ? "Engineering the Future, One Line of Code at a Time."
                  : "Concevoir l'avenir, une ligne de code à la fois."
              }}
            </p>
            <p class="text-xs opacity-90 max-w-md">
              {{
                locale == "en"
                  ? "A software development agency headquartered in Cotonou, Benin. Delivering robust and scalable solutions with over 200 completed projects."
                  : "Une agence de développement logiciel basée à Cotonou, au Bénin. Fournissant des solutions robustes et évolutives avec plus de 200 projets réalisés."
              }}
            </p>
          </div>

          <!-- Quick Links Column -->
          <div class="space-y-4">
            <h3 class="text-sm font-semibold uppercase tracking-wider">
              {{ locale == "en" ? "Quick Links" : "Liens Rapides" }}
            </h3>
            <nav class="flex flex-col space-y-2">
              <ULink
                to="/portfolios"
                class="text-sm hover:underline opacity-90 hover:opacity-100 transition-opacity"
              >
                {{ locale == "en" ? "Latest Work" : "Derniers Travaux" }}
              </ULink>
              <button
                @click="open = !open"
                class="text-sm hover:underline opacity-90 hover:opacity-100 transition-opacity text-left"
              >
                {{ locale == "en" ? "Contact Us" : "Nous Contacter" }}
              </button>
              <ULink
                to="/privacy"
                class="text-sm hover:underline opacity-90 hover:opacity-100 transition-opacity"
              >
                {{
                  locale == "en"
                    ? "Privacy Policy"
                    : "Politique de Confidentialité"
                }}
              </ULink>
              <ULink
                to="/terms"
                class="text-sm hover:underline opacity-90 hover:opacity-100 transition-opacity"
              >
                {{
                  locale == "en" ? "Terms & Conditions" : "Conditions Générales"
                }}
              </ULink>
            </nav>
          </div>

          <!-- Contact Column -->
          <div class="space-y-4">
            <h3 class="text-sm font-semibold uppercase tracking-wider">
              Contact
            </h3>
            <div class="flex flex-col space-y-2 text-xs opacity-90">
              <p>BENIN, Cotonou<br />01 BP 1234</p>
              <a href="mailto:contact@tech2work.tech" class="hover:underline">
                contact@tech2work.tech
              </a>
              <a href="tel:+22901623698899" class="hover:underline">
                +229 01 62 369 889
              </a>
            </div>

            <!-- Social Icons -->
            <div class="flex gap-3 pt-2">
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
          </div>
        </div>

        <!-- Bottom Bar -->
        <USeparator class="my-6" color="secondary" />
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-75"
        >
          <p>
            © {{ new Date().getFullYear() }} Tech2Work.
            {{
              locale == "en" ? "All rights reserved." : "Tous droits réservés."
            }}
          </p>
          <p>
            {{ locale == "en" ? "Made with" : "Fait avec" }} ❤️
            {{ locale == "en" ? "in Benin" : "au Bénin" }}
          </p>
        </div>
      </div>
    </template>
  </UFooter>
</template>

<script setup lang="ts">
const { $getLocale } = useI18n();
const locale = computed(() => $getLocale());
const open = ref(false);

const socialLinks = [
  {
    icon: "i-simple-icons-facebook",
    href: "https://www.facebook.com/profile.php?id=61577734741087",
    label: "Facebook",
  },
  {
    icon: "i-simple-icons-x",
    href: "https://x.com",
    label: "X",
  },
  {
    icon: "i-simple-icons-linkedin",
    href: "https://www.linkedin.com/company/107994649",
    label: "LinkedIn",
  },
];
</script>
