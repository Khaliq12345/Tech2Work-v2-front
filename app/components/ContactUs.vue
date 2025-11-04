<template>
  <section class="space-y-6">
    <div class="space-y-3">
      <h2 class="text-2xl font-semibold text-gray-900">Contactez-nous</h2>
      <p class="text-gray-600 max-w-2xl">
        Besoin d'un accompagnement ? Remplissez le formulaire pour échanger avec un expert Tech2Work.
      </p>
    </div>
    <UButton color="primary" size="lg" icon="i-heroicons-paper-airplane" @click="openDrawer">
      Ouvrir le formulaire
    </UButton>
  </section>

  <Teleport to="body">
    <Transition name="drawer">
      <div v-if="isDrawerOpen" class="fixed inset-0 z-[60] flex">
        <div class="flex-1 bg-black/40" @click="closeDrawer" />
        <div :class="panelClasses">
          <aside class="drawer-hero hidden lg:flex">
            <div class="drawer-hero-overlay" />
            <div class="drawer-hero-content">
              <p class="text-sm uppercase tracking-[0.35em] text-white/60">Tech2Work</p>
              <h3 class="text-3xl font-semibold text-white mt-4">Construisons votre prochain projet.</h3>
              <p class="mt-6 text-white/70 text-sm max-w-xs">
                Décrivez votre besoin et recevez un retour personnalisé de notre équipe d'experts en moins de 24 heures.
              </p>
            </div>
          </aside>

          <div class="drawer-body">
            <header class="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div class="space-y-1">
                <h3 class="text-2xl font-semibold">Échanger avec un expert</h3>
              </div>
              <UButton
                icon="i-heroicons-x-mark"
                color="primary"
                variant="solid"
                square
                size="lg"
                class="bg-[#1d4ed8] hover:bg-[#1a45c2] text-white shadow-lg"
                @click="closeDrawer"
                aria-label="Fermer"
              />
            </header>

            <UForm 
              :state="form"
              class="drawer-form" 
              @submit="handleSubmit"
            >
              <div class="grid grid-cols-1 gap-6">
                <UFormField label="Prénom" name="firstName" :error="errors.firstName || undefined" :ui="formFieldUi">
                  <div class="field-line">
                    <UInput
                      v-model="form.firstName"
                      required
                      variant="none"
                      :ui="inputUi"
                      @blur="validateForm"
                    />
                  </div>
                </UFormField>
                <UFormField label="Nom" name="lastName" :error="errors.lastName || undefined" :ui="formFieldUi">
                  <div class="field-line">
                    <UInput
                      v-model="form.lastName"
                      required
                      variant="none"
                      :ui="inputUi"
                      @blur="validateForm"
                    />
                  </div>
                </UFormField>
                <UFormField label="Nom de l'entreprise" name="companyName" :error="errors.companyName || undefined" :ui="formFieldUi">
                  <div class="field-line">
                    <UInput
                      v-model="form.companyName"
                      required
                      variant="none"
                      :ui="inputUi"
                      @blur="validateForm"
                    />
                  </div>
                </UFormField>
                <UFormField label="Poste occupé" name="jobTitle" :error="errors.jobTitle || undefined" :ui="formFieldUi">
                  <div class="field-line">
                    <UInput
                      v-model="form.jobTitle"
                      required
                      variant="none"
                      :ui="inputUi"
                      @blur="validateForm"
                    />
                  </div>
                </UFormField>
                <UFormField label="E-mail" name="email" :error="errors.email || undefined" :ui="formFieldUi">
                  <div class="field-line">
                    <UInput
                      v-model="form.email"
                      type="email"
                      required
                      variant="none"
                      :ui="inputUi"
                      @blur="validateForm"
                    />
                  </div>
                </UFormField>
                <UFormField label="Numéro de téléphone portable" name="phone" :error="errors.phone || undefined" :ui="formFieldUi">
                  <div class="field-line">
                    <UInput
                      v-model="form.phone"
                      required
                      variant="none"
                      :ui="inputUi"
                      @blur="validateForm"
                    />
                  </div>
                </UFormField>
                <UFormField label="Informations utiles sur le projet" name="projectInfo" :error="errors.projectInfo || undefined" :ui="formFieldUi">
                  <template #description>
                    <p class="text-white/60 text-xs mt-1">
                      Veuillez préciser votre besoin, budget, échéance, nom du décisionnaire pour un devis précis.
                    </p>
                  </template>
                  <div class="field-line field-line--textarea">
                    <UTextarea
                      v-model="form.projectInfo"
                      :rows="3"
                      required
                      variant="none"
                      :ui="textareaUi"
                      @blur="validateForm"
                    />
                  </div>
                </UFormField>
              </div>

              <div class="w-full flex justify-center mt-6">
                <UButton
                  type="submit"
                  style="background-color: white; color: #1d4ed8;"
                  size="lg"
                  class="w-full px-8 py-3 font-semibold"
                  :loading="isSubmitting"
                >
                  Envoyer
                </UButton>
              </div>
            </UForm>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { Teleport, Transition } from 'vue'
import { reactive, ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { object, string, minLength, email as emailValidator, regex, safeParse, pipe, trim } from 'valibot'

interface ContactForm {
  firstName: string
  lastName: string
  companyName: string
  jobTitle: string
  email: string
  phone: string
  projectInfo: string
}

const contactSchema = object({
  firstName: pipe(string(), trim(), minLength(1, 'Ce champ est requis.')),
  lastName: pipe(string(), trim(), minLength(1, 'Ce champ est requis.')),
  companyName: pipe(string(), trim(), minLength(1, "Le nom de l'entreprise est requis.")),
  jobTitle: pipe(string(), trim(), minLength(1, 'Veuillez préciser votre poste.')),
  email: pipe(
    string(),
    trim(),
    minLength(1, "L'adresse e-mail est requise."),
    emailValidator('Adresse e-mail invalide.')
  ),
  phone: pipe(
    string(),
    trim(),
    minLength(1, 'Le numéro de téléphone est requis.'),
    regex(/^\+?[0-9\s.-]{8,20}$/u, 'Numéro de téléphone invalide.')
  ),
  projectInfo: pipe(string(), trim(), minLength(10, 'Veuillez fournir quelques détails sur votre projet (10 caractères min.).')),
})

const form = reactive<ContactForm>({
  firstName: '',
  lastName: '',
  companyName: '',
  jobTitle: '',
  email: '',
  phone: '',
  projectInfo: '',
})

const errors = reactive<Record<keyof ContactForm, string | null>>({
  firstName: null,
  lastName: null,
  companyName: null,
  jobTitle: null,
  email: null,
  phone: null,
  projectInfo: null,
})

const isDrawerOpen = ref(false)
const isSubmitting = ref(false)
const toast = useToast()

const panelClasses = computed(() => {
  return [
    'drawer-panel',
    'ml-auto',
    'h-full',
    'w-full',
    'lg:w-[50vw]',
    'bg-[#050505]',
    'text-white',
    'flex',
    'flex-col',
    'lg:flex-row',
    'relative',
    'shadow-2xl',
    'overflow-hidden',
  ]
})

const inputUi = {
  wrapper: 'w-full',
  base: 'w-full bg-transparent text-white outline-none focus:outline-none py-3',
  ring: 'hidden',
  shadow: 'none',
  font: 'text-base',
  padding: '',
}

const textareaUi = {
  ...inputUi,
  base: 'w-full bg-transparent text-white outline-none focus:outline-none resize-none py-3',
}

const formFieldUi = {
  root: 'space-y-2',
  label: 'text-white text-sm font-semibold tracking-wide',
  container: 'mt-1',
  description: 'text-white/50 text-xs',
  error: 'text-rose-400 text-sm mt-2',
}

watch(isDrawerOpen, (value) => {
  if (import.meta.client) {
    document.body.style.overflow = value ? 'hidden' : ''
  }
})

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('keydown', handleKeydown)
  }
})

onBeforeUnmount(() => {
  if (import.meta.client) {
    window.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = ''
  }
})

const openDrawer = () => {
  isDrawerOpen.value = true
}

const closeDrawer = () => {
  isDrawerOpen.value = false
}

defineExpose({
  openDrawer,
})

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeDrawer()
  }
}

const validateForm = () => {
  const result = safeParse(contactSchema, form)
  for (const key in errors) {
    errors[key as keyof ContactForm] = null
  }

  if (!result.success) {
    for (const issue of result.issues) {
      const field = issue.path?.[0] as keyof ContactForm | undefined
      if (field) {
        errors[field] = issue.message
      }
    }
  }

  return result.success
}

const resetForm = () => {
  form.firstName = ''
  form.lastName = ''
  form.companyName = ''
  form.jobTitle = ''
  form.email = ''
  form.phone = ''
  form.projectInfo = ''
  for (const key in errors) {
    errors[key as keyof ContactForm] = null
  }
}

const handleSubmit = async () => {
  if (!validateForm()) {
    toast.add({ title: 'Validation requise', description: 'Merci de vérifier les champs du formulaire.', color: 'warning' })
    return
  }

  try {
    isSubmitting.value = true
    await new Promise((resolve) => setTimeout(resolve, 800))
    toast.add({ title: 'Message envoyé', description: 'Nous vous contacterons dans les plus brefs délais.', color: 'success' })
    resetForm()
    closeDrawer()
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.drawer-enter-to,
.drawer-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.drawer-panel {
  max-width: 100%;
  backdrop-filter: saturate(140%) blur(4px);
}

.drawer-hero {
  position: relative;
  width: 40%;
  background: radial-gradient(circle at 20% 20%, #1f1f1f 0%, #111 55%, #090909 100%);
  overflow: hidden;
  align-items: stretch;
}

.drawer-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.08) 2px, transparent 2px);
  background-size: 48px 48px;
  opacity: 0.6;
}

.drawer-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(145deg, rgba(9, 9, 9, 0.4), rgba(9, 9, 9, 0.05));
}

.drawer-hero-content {
  position: relative;
  z-index: 1;
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 100%;
  gap: 1.5rem;
}

.drawer-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #050505;
  overflow: hidden;
}

.drawer-form {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding: 2rem 1.75rem 2.5rem;
  overflow-y: auto;
}

.drawer-form::-webkit-scrollbar {
  width: 6px;
}

.drawer-form::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 999px;
}

@media (max-width: 1023px) {
  .drawer-form {
    padding: 1.75rem;
  }
}

.field-line {
  border-bottom: 1px solid rgba(255, 255, 255, 0.65);
  transition: border-color 0.2s ease;
}

.field-line:focus-within {
  border-bottom-color: rgba(255, 255, 255, 0.95);
}

.field-line--textarea {
  padding-bottom: 0.25rem;
}
</style>
