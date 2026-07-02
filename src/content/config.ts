import { defineCollection, z } from 'astro:content';

const aboutCollection = defineCollection({
  type: 'data',
  schema: z.object({
    nickname: z.string(),
    avatar: z.string().default('/images/icons/avatar.png'),
    bio: z.string(),
    tagline: z.string(),
    school: z.string().default(''),
    hometown: z.string().default(''),
    location: z.string().default(''),
    social: z.object({
      github: z.string().optional(),
      twitter: z.string().optional(),
      email: z.string().optional(),
    }),
  }),
});

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

const productsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    icon: z.string().optional(),
    description: z.string(),
    link: z.string().url(),
    order: z.number().default(0),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    icon: z.string().optional(),
    description: z.string(),
    repo: z.string().url(),
    stars: z.number().default(0),
    language: z.string().default(''),
  }),
});

const outsourcingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    client: z.string().default(''),
    link: z.string().url().optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  about: aboutCollection,
  articles: articlesCollection,
  products: productsCollection,
  projects: projectsCollection,
  outsourcing: outsourcingCollection,
};
