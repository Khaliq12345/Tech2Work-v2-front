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

            <template #footer>
                <h3 class="text-primary text-xl font-semibold text-center px-4">
                    {{ item.title }}
                </h3>
            </template>
        </UCard>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    items: PortfolioItem[];
}>();
</script>
