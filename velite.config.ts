import { defineCollection, defineConfig, s } from 'velite'

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split('/').slice(1).join('/'),
})

const posts = defineCollection({
  name: 'Post',
  pattern: 'blog/**/*.mdx',
  schema: s
    .object({
      title: s.string().max(99), // Zod primitive type
      slug: s.path(), // auto generate slug from file path
      // slug: s.slug('posts'), // validate format, unique in posts collection
      description: s.string().max(999).optional(),
      date: s.isodate(), // input Date-like string, output ISO Date string.
      published: s.boolean().default(true),
      body: s.mdx(),
      // cover: s.image(), // input image relative path, output image object with blurImage.
      // video: s.file().optional(), // input file relative path, output file public path.
      // metadata: s.metadata(), // extract markdown reading-time, word-count, etc.
      // excerpt: s.excerpt(), // excerpt of markdown content
      // content: s.markdown(), // transform markdown to html
    })
    .transform(computedFields),
})

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { posts },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
})
