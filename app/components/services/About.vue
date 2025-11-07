<template>
    <UPageSection>
        <div class="space-y-6">
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="hidden md:block"></div> 
                <p class="text-gray-600 text-sm leading-loose tracking-wide text-center md:text-right lg:text-lg font-normal">
                    {{ description }}
                </p>
            </div>

            
            <div class="grid grid-cols-10 gap-6">
                <img 
                    :src="images?.[0]" 
                    :alt="'Project image 1'" 
                    class="col-span-10 md:col-span-7 w-full h-full aspect-video object-cover rounded-lg"
                />
                <img 
                    :src="images?.[1]" 
                    :alt="'Project image 2'" 
                    class="hidden md:block md:col-span-3 w-full h-full aspect-video object-cover rounded-lg"
                />
            </div>
        </div>
    </UPageSection>
</template>

<script setup lang="ts">
defineProps<{
    description: string;
    images: string[];
}>();
</script>