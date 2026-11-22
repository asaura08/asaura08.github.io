import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
export const collections = {
  projects: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
      title: z.string(),
      shortTitle: z.string(),
      summary: z.string(),
      feature: z.object({
        signal: z.string(),
        context: z.string(),
        figureTitle: z.string(),
        caption: z.string(),
        decision: z.string(),
        explanation: z.string(),
      }).optional(),
    }),
  }),
};
