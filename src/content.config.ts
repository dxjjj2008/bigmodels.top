import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    author: z.string().default('BigModels.top'),
    published: z.boolean().default(false),
    featured: z.boolean().default(false),
    pubDate: z.date().optional(),
  }),
});

export const collections = { blog };
