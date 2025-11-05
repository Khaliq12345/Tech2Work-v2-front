<template>
  <section class="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- En-tête de section -->
      <div class="mb-8 sm:mb-12 lg:mb-16 flex justify-center">
        <div class="text-center">
          <TitleSubtitle
            subtitle="WHAT WE DO"
            title="Our Services"
          />
        </div>
      </div>

      <!-- Grille des services -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
        <!-- Mobile App Development -->
        <UCard class="no-border text-center group cursor-pointer  transition-colors duration-300">
          <div class="flex flex-col items-center p-4 sm:p-6">
            <Icon 
              name="heroicons:device-phone-mobile" 
              class="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 transition-all duration-300 ease-out group-hover:text-gray-900 group-hover:translate-y-1 text-blue-500"
            />
            
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight">
              Mobile Application Development
            </h3>
            
            <p class="text-gray-600 text-sm sm:text-base leading-relaxed max-w-sm">
              Interact with your users efficiently, with our strategic UI/UX design process.
            </p>
          </div>
        </UCard>

        <!-- Advertising Design -->
        <UCard class="no-border text-center group cursor-pointer  transition-colors duration-300">
          <div class="flex flex-col items-center p-4 sm:p-6">
            <Icon 
              name="heroicons:photo" 
              class="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 transition-all duration-300 ease-out group-hover:text-gray-900 group-hover:translate-y-1 text-blue-500"
            />
            
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight">
              Advertising Design
            </h3>
            
            <p class="text-gray-600 text-sm sm:text-base leading-relaxed max-w-sm">
              Whatever you want to achieve; we research, plan, consider market needs in your campaigns.
            </p>
          </div>
        </UCard>

        <!-- Branding -->
        <UCard class="no-border text-center group cursor-pointer  transition-colors duration-300">
          <div class="flex flex-col items-center p-4 sm:p-6">
            <Icon 
              name="heroicons:pencil" 
              class="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 transition-all duration-300 ease-out group-hover:text-gray-900 group-hover:translate-y-1 text-blue-500"
            />
            
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight">
              Branding
            </h3>
            
            <p class="text-gray-600 text-sm sm:text-base leading-relaxed max-w-sm">
              Every business needs a unique identity, distinguishing it from its competitors. WE DO THAT PERFECTLY.
            </p>
          </div>
        </UCard>

        <!-- Digital Marketing -->
        <UCard class="no-border text-center group cursor-pointer  transition-colors duration-300">
          <div class="flex flex-col items-center p-4 sm:p-6">
            <Icon 
              name="heroicons:chart-bar" 
              class="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 transition-all duration-300 ease-out group-hover:text-gray-900 group-hover:translate-y-1 text-blue-500"
            />
            
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight">
              Digital Marketing
            </h3>
            
            <p class="text-gray-600 text-sm sm:text-base leading-relaxed max-w-sm">
              Organic or paid, we use all the available approaches to make effective online campings.
            </p>
          </div>
        </UCard>

        <!-- Media Production -->
        <UCard class="no-border text-center group cursor-pointer  transition-colors duration-300">
          <div class="flex flex-col items-center p-4 sm:p-6">
            <Icon 
              name="heroicons:camera" 
              class="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 transition-all duration-300 ease-out group-hover:text-gray-900 group-hover:translate-y-1 text-blue-500"
            />
            
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight">
              Media production
            </h3>
            
            <p class="text-gray-600 text-sm sm:text-base leading-relaxed max-w-sm">
              Create mind blowing visuals, and engage with your audience emotionally, guiding them to your goal.
            </p>
          </div>
        </UCard>

        <!-- Web Design & Development -->
        <UCard class="no-border text-center group cursor-pointer  transition-colors duration-300">
          <div class="flex flex-col items-center p-4 sm:p-6">
            <Icon 
              name="heroicons:computer-desktop" 
              class="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 transition-all duration-300 ease-out group-hover:text-gray-900 group-hover:translate-y-1 text-blue-500"
            />
            
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight">
              Web Design & Development
            </h3>
            
            <p class="text-gray-600 text-sm sm:text-base leading-relaxed max-w-sm">
              The web can be a huge leap in your business growth, let us help you get you a very own web site.
            </p>
          </div>
        </UCard>
      </div>

      <div class="flex justify-center mt-8 sm:mt-12 lg:mt-16">
        <CustomButton title="Get Your Service!" />
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.no-border {
  border: none !important;
  box-shadow: none !important;
  padding: 0 !important;
}
</style>