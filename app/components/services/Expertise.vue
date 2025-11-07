<template>
    <UPageSection>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="space-y-6">
                <h2 class="text-3xl font-bold text-gray-900">
                    Nos <span class="text-gray-600">expertises</span>
                </h2>
                <div class="space-y-4 text-gray-900">
                    <p>{{ description }}</p>
                </div>
                <CustomButton title="Prendre rendez-vous" />
            </div>
            <div class="space-y-4">
                <div
                    v-for="(item, index) in splitSkills.firstHalf"
                    :key="index"
                    class="border-t border-gray-200 pt-4"
                >
                    <h3 class="text-lg font-semibold text-gray-900">
                        {{ item }}
                    </h3>
                </div>
            </div>
            <div class="space-y-4">
                <div
                    v-for="(item, index) in splitSkills.secondHalf"
                    :key="index"
                    class="border-t border-gray-200 pt-4"
                >
                    <h3 class="text-lg font-semibold text-gray-900">
                        {{ item }}
                    </h3>
                </div>
            </div>
        </div>
    </UPageSection>
</template>

<script setup lang="ts">
const props = defineProps<{
    description: string;
    skills: string[];
}>();

const splitSkills = computed(() => {
    const mid = Math.ceil(props.skills.length / 2);
    return {
        firstHalf: props.skills.slice(0, mid),
        secondHalf: props.skills.slice(mid)
    };
});
</script>
