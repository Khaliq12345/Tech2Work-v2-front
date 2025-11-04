<template>
  <header class="fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-200">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <div class="flex items-center gap-6 md:gap-10">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center">
            <img
              src="/logo.jpg"
              alt="Tech2Work"
              class="h-12 w-auto"
            />
          </NuxtLink>

          <!-- Navigation Desktop -->
          <nav class="hidden md:flex items-center gap-6">
            <NuxtLink
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              class="nav-link"
              :class="{ 'nav-link-active': isActive(item.to) }"
            >
              {{ item.label }}
            </NuxtLink>
          </nav>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <UButton
            :icon="mobileMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
            color="neutral"
            variant="solid"
            square
            size="lg"
            class="shadow-sm bg-gray-200 text-gray-700 border border-gray-300 hover:bg-gray-300"
            @click="toggleMobileMenu"
            aria-label="Menu"
          />
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden bg-white border-t border-gray-200"
    >
      <div class="px-4 py-6 space-y-4">
        <nav class="space-y-4">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="block text-gray-800 font-semibold py-2 transition-colors duration-200"
            :class="{ 'text-accent': isActive(item.to) }"
            @click="closeMobileMenu"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
interface NavItem {
  label: string
  to: string
}

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Solutions", to: "/solutions" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Story", to: "/story" },
  { label: "Career", to: "/career" },
  { label: "Blog", to: "/blog" },
  { label: "Contact Us", to: "/contact" },
]

const route = useRoute()

// State pour le menu mobile
const mobileMenuOpen = ref(false)

// Méthodes pour gérer le menu mobile
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const isActive = (path: string) => {
  if (path === "/") {
    return route.path === path
  }
  return route.path.startsWith(path)
}

// Fermer le menu mobile quand on redimensionne la fenêtre
onMounted(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      mobileMenuOpen.value = false
    }
  }
  
  window.addEventListener('resize', handleResize)
  
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
})
</script>

<style scoped>

.text-accent {
  color: var(--ui-accent);
}

.nav-link {
  position: relative;
  padding-bottom: 6px;
  font-weight: 600;
  font-size: 0.95rem;
  color: #1f2937;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: var(--ui-accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s ease;
}

.nav-link:hover {
  color: var(--ui-accent);
}

.nav-link:hover::after {
  transform: scaleX(1);
}

.nav-link-active {
  color: var(--ui-accent);
}

.nav-link-active::after {
  transform: scaleX(1);
}
</style>