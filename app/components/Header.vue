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
          Contact
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
        Contact
      </UButton>
      <UButton
        variant="solid"
        color="white"
        class="text-black"
        v-for="locale_temp in $getLocales()"
        :key="locale_temp.code"
        @click="
          $switchLocale(locale_temp.code);
          locale = locale_temp.code;
        "
      >
        {{ locale_temp.code }}
      </UButton>
    </template>
  </UHeader>
  <USlideover
    v-model:open="isContactOpen"
    side="right"
    title="Contact Us"
    close-icon="i-lucide-arrow-left"

    :ui="{ 
      content: 'w-full p-4 ', 
      title: 'text-black dark:text-black', 
    }"
    :close="{
      color: 'primary',
      variant: 'ghost'
    }"
  >
    <template #body>
      <UForm :schema="schema" :state="contactState" class="space-y-4 w-full" @submit="onContactSubmit">
        <UFormField 
          label="Name" 
          name="name" 
          :ui="{ label: 'text-black dark:text-black w-full' }"
        >
          <UInput v-model="contactState.name" placeholder="Enter your name" class="w-full" />
        </UFormField>

        <UFormField 
          label="Email" 
          name="email" 
          :ui="{ label: 'text-black dark:text-black' }"
        >
          <UInput v-model="contactState.email" type="email" placeholder="Enter your email" class="w-full" />
        </UFormField>

        <UFormField 
          label="Message" 
          name="message" 
          :ui="{ label: 'text-black dark:text-black' }"
        >
          <UTextarea v-model="contactState.message" placeholder="Please enter a message." class="w-full" />
        </UFormField>

        <UButton type="submit" color="primary" variant="solid" class="text-white">
          Send
        </UButton>
      </UForm>
    </template>
  </USlideover>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import { useI18n } from "#imports";
import * as v from 'valibot'
const { $t, $getLocales, $switchLocale, $getLocale } = useI18n();
const locale = ref($getLocale());
const navItems: NavigationMenuItem[] = computed(() => [
  { label: "Home", to: `/${locale.value}` },
  { label: "Services", to: `/${locale.value}/services/` },
  { label: "Portfolio", to: `/${locale.value}/portfolios/` },
  { label: "About", to: `/${locale.value}/about` },
  { label: "Contact Us", to: `/${locale.value}/contact/` },
]);

const isContactOpen = ref(false)

const schema = v.object({
  name: v.pipe(v.string(), v.minLength(2, 'Please enter your name.')),
  email: v.pipe(v.string(), v.email('Please enter a valid email.')),
  message: v.pipe(v.string(), v.minLength(10, 'Please enter a message.'))
})

type ContactSchema = v.InferOutput<typeof schema>

const contactState = reactive<ContactSchema>({ name: '', email: '', message: '' })

</script>
<style scoped></style>