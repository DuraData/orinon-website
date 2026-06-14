import { useMemo, useState } from 'react';

import { PageHero } from '../components/sections/PageHero';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { blogCategories, blogPosts } from '../data/blogPosts';
import { usePageMeta } from '../hooks/usePageMeta';

export function Learn() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');

  usePageMeta(
    'Learn | Orinon',
    'Read Orinon insights on cloud, cybersecurity, AI, data, development, and technology strategy.',
  );

  const featured = blogPosts.find((post) => post.featured) ?? blogPosts[0];

  const filteredPosts = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return blogPosts.filter((post) => {
      const matchesCategory = category === 'All' || post.category === category;
      const matchesQuery =
        normalized.length === 0 ||
        post.title.toLowerCase().includes(normalized) ||
        post.excerpt.toLowerCase().includes(normalized) ||
        post.category.toLowerCase().includes(normalized);

      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      <PageHero
        eyebrow="Insights & Ideas"
        title="The Orinon journal"
        description="Practical perspectives on cloud, security, AI, and building technology that scales."
      />

      <section className="bg-white pb-12 pt-16">
        <Container>
          <Reveal>
            <Card className="overflow-hidden rounded-[1.4rem]">
              <div className="grid lg:grid-cols-2">
                <div className="flex min-h-[280px] items-end bg-[repeating-linear-gradient(135deg,#322a7a_0px,#322a7a_12px,#3D2EB5_12px,#3D2EB5_24px)] p-6">
                  <Badge className="border-0 bg-gold text-ink">Featured</Badge>
                </div>
                <div className="p-8 sm:p-10">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
                    <span className="font-bold text-brand-700">{featured.category}</span>
                    <span>•</span>
                    <span>{featured.date}</span>
                  </div>
                  <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink">
                    {featured.title}
                  </h2>
                  <p className="mt-4 leading-8 text-muted">{featured.excerpt}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
                    <span className="font-semibold text-ink">{featured.author}</span>
                    <span className="text-slate-400">{featured.readTime} read</span>
                    <span className="font-semibold text-brand-700">Read more →</span>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white pb-4 pt-4">
        <Container className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-3">
            {blogCategories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  item === category
                    ? 'border-brand-700 bg-brand-700 text-white'
                    : 'border-slate-200 bg-white text-muted hover:border-brand-700 hover:text-brand-700'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <label className="relative block">
            <span className="sr-only">Search articles</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-full border border-slate-200 px-5 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-brand-700 sm:w-64"
            />
          </label>
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container>
          {filteredPosts.length === 0 ? (
            <div className="py-20 text-center">
              <h2 className="font-display text-2xl font-bold text-ink">No articles found</h2>
              <p className="mt-3 text-muted">Try a different search or category.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredPosts.map((post, index) => (
                <Reveal key={post.slug} delay={index * 0.04}>
                  <Card className="group h-full overflow-hidden transition hover:-translate-y-1.5 hover:shadow-soft">
                    <div className="relative h-40 bg-[repeating-linear-gradient(135deg,#E7E9F4_0px,#E7E9F4_10px,#EEF0F8_10px,#EEF0F8_20px)]">
                      <span className="absolute left-4 top-4 rounded-full border border-line bg-white px-3 py-1 text-xs font-bold text-brand-700">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <p className="text-xs text-slate-400">
                        {post.date} · {post.readTime}
                      </p>
                      <h3 className="mt-3 font-display text-xl font-bold leading-8 text-ink">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-muted">{post.excerpt}</p>
                      <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cta-gradient text-xs font-bold text-white">
                          {post.author
                            .split(' ')
                            .map((chunk) => chunk[0])
                            .join('')}
                        </span>
                        <span className="text-sm font-medium text-muted">{post.author}</span>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
