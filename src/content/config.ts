import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    dateApprox: z.boolean().default(false),
    image: z.string().optional(),
    imagePosition: z.enum(['center', 'top']).default('center'),
    originalUrl: z.string(),
    pdfs: z
      .array(
        z.object({
          label: z.string(),
          file: z.string(),
        })
      )
      .default([]),
    draft: z.boolean().default(false),
  }),
});

const board = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    photo: z.string(),
    order: z.number(),
  }),
});

export const collections = { news, board };
