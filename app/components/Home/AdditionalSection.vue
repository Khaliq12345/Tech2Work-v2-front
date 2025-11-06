<template>
  <section class="py-16 sm:py-24">
    <UContainer>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="order-1 lg:order-1 w-3/4 mx-auto lg:mx-0">
          <ImageComponent src="logo.png" class="max-w-sm" />
        </div>
        
        <div class="order-2 lg:order-2">
          <UPageCTA
            class="no-border"
            title="We help brands to tell their story to their customers."
            :ui="{ 
              wrapper: 'p-0 text-center lg:text-left', 
              title: 'text-3xl sm:text-4xl font-bold tracking-tight text-black',
              description: 'hidden',
              links: 'justify-center lg:justify-start mt-8'
            }"
          >
            <template #links>
              <CustomButton title="Get Your Service!" />
            </template>
          </UPageCTA>
        </div>
        
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.no-border {
  border: none !important;
  box-shadow: none !important;
  padding: 0 !important;
}
</style>