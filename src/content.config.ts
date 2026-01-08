import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const publications = defineCollection({
	loader: glob({ base: "./src/content/publications", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		authors: z.string(),
		journal: z.string().optional(),
		year: z.number(),
		volume: z.string().optional(),
		issue: z.string().optional(),
		pages: z.string().optional(),
		doi: z.string().url().optional(),
		pdf: z.string().url().optional(),
		arxiv: z.string().url().optional(),
		ssrn: z.string().url().optional(),
		publisher: z.string().optional(),
		journalRank: z.enum(["A*", "A", "B", "C"]).optional(),
		abstract: z.string().optional(),
		type: z.enum(["journal", "book", "chapter", "working-paper", "report"]).default("journal"),
		featured: z.boolean().default(false),
	}),
});

const news = defineCollection({
	loader: glob({ base: "./src/content/news", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		type: z.enum(["publication", "talk", "award", "conference", "other"]).default("other"),
		link: z.string().url().optional(),
		description: z.string().optional(),
	}),
});

const roles = defineCollection({
	loader: glob({ base: "./src/content/roles", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		role: z.string(),
		org: z.string(),
		order: z.number().optional().default(0),
	}),
});

const about = defineCollection({
	loader: glob({ base: "./src/content/about", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
	}),
});

const home = defineCollection({
	loader: glob({ base: "./src/content/home", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
	}),
});

const pages = defineCollection({
	loader: glob({ base: "./src/content/pages", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		path: z.string(),
		menuLabel: z.string(),
		menuOrder: z.number().optional().default(999),
		showInMenu: z.boolean().default(false),
	}),
});

export const collections = { blog, publications, news, roles, about, home, pages };
