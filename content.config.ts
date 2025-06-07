import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    portfolio: defineCollection({
      type: "data",
      source: "portfolio.yml",
      schema: z.object({
        interests: z.array(
          z.object({
            name: z.string(),
          })
        ),
        categories: z.array(
          z.object({
            name: z.string(),
            list: z
              .array(
                z.object({
                  name: z.string(),
                  url: z.string(),
                })
              )
              .optional(),
          })
        ),
      }),
    }),
  },
});
