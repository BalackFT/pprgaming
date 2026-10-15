import { defineCollection, z } from 'astro:content';
const posts = defineCollection({ type: 'content', schema: z.object({
  title: z.string(), description: z.string(), date: z.coerce.date(),
  category: z.string(), tags: z.array(z.string()).default([]), starCitizen: z.boolean().default(false),
  sources: z.array(z.object({ name: z.string(), url: z.string() })).default([]), draft: z.boolean().default(false),
  image: z.string().optional(), imageAlt: z.string().optional(), imageCredit: z.string().optional(),
})});
export const collections = { posts };
