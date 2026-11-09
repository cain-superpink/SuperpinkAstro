import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ base: "./src/pages/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    ReleaseDate: z.date(),
    tags: z.array(z.string()).optional(),
    youtubeURL: z.string().optional(),
    spotifyURL: z.string().optional(),
    siteURL: z.string().optional(),
    soundcloudURL: z.string().optional(),
  }),
});

export const collections = { projects };
