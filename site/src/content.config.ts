import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    year: z.number(),
    location: z.string(),
    category: z.enum([
      'housing-needs-assessment',
      'housing-strategy',
      'market-feasibility-analysis',
      'comprehensive-planning',
      'policy-guidance',
    ]),
    summary: z.string(),
    coverImage: z.string().optional(),
    featured: z.boolean().default(false),
    deliverables: z.array(z.string()).optional(),
    externalUrl: z.string().url().optional(),
    year2: z.number().optional(),
    ongoing: z.boolean().default(false),
    stats: z.array(z.object({
      value: z.string(),
      label: z.string(),
    })).optional(),
  }),
});

export const collections = { projects };
