<template>
  <section
    class="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8"
    v-motion-pop-visible-once
    :duration="2000"
    :delay="10"
  >
    <!-- Header -->
    <div class="max-w-7xl mx-auto mb-8 md:mb-12 lg:mb-16">
      <h2
        class="text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center"
      >
        {{ $t("review_title") }}
      </h2>
    </div>

    <!-- Marquee Reviews -->
    <div class="space-y-4">
      <ReviewMarquee
        :reviews="reviews.slice(0, Math.ceil(reviews.length / 2))"
        :reverse="false"
      />

      <ReviewMarquee
        :reviews="reviews.slice(Math.ceil(reviews.length / 2))"
        :reverse="true"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const { $t } = useI18n();

const reviews = computed(() => {
  const rawReviews = $t("reviews");
  if (!rawReviews || !Array.isArray(rawReviews)) {
    return [];
  }
  return rawReviews.map((review) => ({
    logo: "/logo.png",
    description: String(review.description || ""),
    name: String(review.name || ""),
    position: String(review.position || ""),
    company: String(review.company || ""),
  }));
});
</script>
