import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.string(),
    category: z.string(),
    readTime: z.number(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { posts };
