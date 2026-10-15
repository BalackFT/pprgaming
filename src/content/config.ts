import { defineCollection, z } from 'astro:content';
const posts = defineCollection({ type: 'content', schema: z.object({
  title: z.string(), description: z.string(), date: z.coerce.date(),
  category: z.string(), tags: z.array(z.string()).default([]), starCitizen: z.boolean().default(false),
  sources: z.array(z.object({ name: z.string(), url: z.string() })).default([]), draft: z.boolean().default(false),
  image: z.string().optional(), imageAlt: z.string().optional(), imageCredit: z.string().optional(),
})});
const shots = defineCollection({ type: 'data', schema: z.object({
  date: z.coerce.date(), title: z.string(), game: z.string().default('Star Citizen'),
  source: z.enum(['x','own']),
  url: z.string().url().optional(), handle: z.string().optional(),
  image: z.string().optional(), alt: z.string().optional(), credit: z.string().default('@PPRGamers'),
}).refine(d => d.source==='x' ? !!(d.url && d.handle) : !!(d.image && d.alt), { message: 'x shots need url+handle; own shots need image+alt' }) });
export const collections = { posts, shots };
