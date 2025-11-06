<template>
    <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
        <UCard
            v-for="(item, index) in items"
            :key="index"
            class="relative group overflow-hidden rounded-2xl shadow-md cursor-pointer transition-transform duration-300 hover:scale-[1.03] bg-none"
            :to="item.to"
        >
            <!-- Image -->
            <img
                :src="item.image"
                alt=""
                class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <!-- Overlay on hover -->
            <div
                class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
            >
                <h3 class="text-white text-xl font-semibold text-center px-4">
                    {{ item.title }}
                </h3>
            </div>
        </UCard>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    items: PortfolioItem[];
}>();
</script>
