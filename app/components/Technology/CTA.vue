<template>
  <UPageSection class="bg-white">
    <UPageCTA
      title="Partner With Dev.co"
      description="Are you ready to learn more about Python development? Or are you interested in a free quote? Contact DEV.co for more information or a free consultation today!"
      variant="naked"
      orientation="horizontal"
      :links="[
        {
          label: 'Tell Us About Your Next Project',
          color: 'info',
          size: 'lg',
          variant: 'solid'
        }
      ]"
      :ui="{
        title: 'text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 sm:text-left text-center',
        description: 'text-gray-600 mt-4 text-sm sm:text-base sm:text-left text-center',
        links: 'justify-center sm:justify-start mt-6',
        container: 'flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-8 sm:gap-12'
      }"
    >
      <img 
        src="/logo.png" 
        alt="Dev.co Logo" 
        class="w-full max-w-xs sm:max-w-md mx-auto rounded-lg"
      />
    </UPageCTA>
  </UPageSection>
</template>