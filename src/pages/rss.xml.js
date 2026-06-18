import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  return rss({
    title: 'DevVault — Dev Tools & AI Reviews',
    description: 'Honest reviews of dev tools, AI assistants, security software, and crypto tools.',
    site: context.site,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      description: post.data.excerpt,
      link: `/posts/${post.slug}/`,
    })),
  });
}
