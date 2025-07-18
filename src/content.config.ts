import { defineCollection, z } from 'astro:content';

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    startDate: z.date(),
    location: z.object({
      city: z.string(),
      country: z.string(),
    }),
    url: z.string().url(),
    image: z.string().optional(),
    featured: z.boolean(),
    eventType: z.array(z.enum(['AI', 'Big Data', 'Cloud', 'Fintech',  'IoT', 'Web3.0'])),
    region: z.enum(['Americas', 'Asia', 'Europe', 'Other']),
  }),
});

export const collections = {
  events,
};