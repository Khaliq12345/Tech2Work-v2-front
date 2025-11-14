import { defineCollection, defineContentConfig } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    services: defineCollection({
      type: "data",
      source: "services/**.json",
      schema: z.object({
        en: z.object({
          title: z.string(),
          tag: z.string(),
          cover: z.string(),
          about: z.object({
            description: z.string(),
            images: z.array(z.string()),
          }),
          expertise: z.object({
            description: z.string(),
            skills: z.array(z.string()),
          }),
          solutions: z.object({
            title: z.string(),
            description: z.string(),
            content: z.string(),
          }),
          projects: z.object({
            title: z.string(),
            description: z.string(),
            image: z.string(),
            badge: z.string(),
            to: z.string(),
          }),
        }),
        fr: z.object({
          title: z.string(),
          tag: z.string(),
          cover: z.string(),
          about: z.object({
            description: z.string(),
            images: z.array(z.string()),
          }),
          expertise: z.object({
            description: z.string(),
            skills: z.array(z.string()),
          }),
          solutions: z.object({
            title: z.string(),
            description: z.string(),
            content: z.string(),
          }),
          projects: z.object({
            title: z.string(),
            description: z.string(),
            image: z.string(),
            badge: z.string(),
            to: z.string(),
          }),
        }),
      }),
    }),

    technology: defineCollection({
      type: "data",
      source: "technology/**.json",
      schema: z.object({
        en: z.object({
          title: z.string(),
          name: z.string(),
          coverImage: z.string(),
          heroHeadline: z.string(),
          heroCoverAlt: z.string(),
          descriptionV1: z.string(),
          descriptionV2: z.string(),
          additionalDescription: z.string(),
          additionalTitle: z.string(),
          usesTitle: z.string(),
          usesDescription: z.string(),
          features: z.array(
            z.object({
              title: z.string(),
              description: z.string(),
              icon: z.string(),
            }),
          ),
          process: z.array(
            z.object({
              phase: z.string(),
              title: z.string(),
              description: z.string(),
              icon: z.string(),
            }),
          ),
          processTitle: z.string(),
          processDescription: z.string(),
          ctaTitle: z.string(),
          ctaDescription: z.string(),
          ctaImageAlt: z.string(),
        }),
        fr: z.object({
          title: z.string(),
          name: z.string(),
          coverImage: z.string(),
          heroHeadline: z.string(),
          heroCoverAlt: z.string(),
          descriptionV1: z.string(),
          descriptionV2: z.string(),
          additionalDescription: z.string(),
          additionalTitle: z.string(),
          usesTitle: z.string(),
          usesDescription: z.string(),
          features: z.array(
            z.object({
              title: z.string(),
              description: z.string(),
              icon: z.string(),
            }),
          ),
          process: z.array(
            z.object({
              phase: z.string(),
              title: z.string(),
              description: z.string(),
              icon: z.string(),
            }),
          ),
          processTitle: z.string(),
          processDescription: z.string(),
          ctaTitle: z.string(),
          ctaDescription: z.string(),
          ctaImageAlt: z.string(),
        }),
      }),
    }),

    portfolios: defineCollection({
      type: "data",
      source: "portfolios/**.json",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(),
        date: z.string(),
        tags: z.array(z.string()),
        client: z.string(),
        mobileImage: z.string(),
        galleries: z.array(z.string()),
        link: z.string(),
        follow: z.array(
          z.object({
            label: z.string(),
            icon: z.string(),
            url: z.string(),
          }),
        ),
      }),
    }),
  },
});
