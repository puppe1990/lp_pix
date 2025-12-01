import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { Header, Footer, ShareButton } from '@/components';
import { Calendar, Clock, ArrowLeft, User, Tag } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post não encontrado | Blog SegurePix',
    };
  }

  return {
    title: `${post.title} | Blog SegurePix`,
    description: post.excerpt || '',
    openGraph: {
      title: post.title,
      description: post.excerpt || '',
      type: 'article',
      publishedTime: post.date,
    },
  };
}

const mdxComponents = {
  h1: (props: any) => (
    <h1
      className="text-3xl md:text-4xl font-bold text-white mt-12 mb-6 pb-3 border-b border-white/10"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="text-xl md:text-2xl font-semibold text-white mt-8 mb-3"
      {...props}
    />
  ),
  h4: (props: any) => (
    <h4 className="text-lg font-semibold text-white mt-6 mb-2" {...props} />
  ),
  p: (props: any) => (
    <p className="text-white/70 leading-relaxed mb-5 text-lg" {...props} />
  ),
  a: (props: any) => (
    <a
      className="text-brand-400 hover:text-brand-300 underline underline-offset-4 decoration-brand-500/30 hover:decoration-brand-400 transition-colors"
      {...props}
    />
  ),
  ul: (props: any) => (
    <ul className="mb-6 space-y-3 text-white/70" {...props} />
  ),
  ol: (props: any) => (
    <ol className="mb-6 space-y-3 text-white/70 list-decimal list-inside" {...props} />
  ),
  li: (props: any) => (
    <li className="flex items-start gap-3 text-lg">
      <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-3 flex-shrink-0" />
      <span {...props} />
    </li>
  ),
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-brand-500 pl-6 py-2 my-6 bg-brand-500/5 rounded-r-lg"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="bg-white/10 px-2 py-1 rounded text-sm font-mono text-brand-300"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="bg-midnight-900/80 border border-white/10 p-5 rounded-xl overflow-x-auto mb-6 text-sm"
      {...props}
    />
  ),
  strong: (props: any) => (
    <strong className="font-semibold text-white" {...props} />
  ),
  em: (props: any) => <em className="italic text-white/80" {...props} />,
  hr: (props: any) => <hr className="my-10 border-white/10" {...props} />,
  table: (props: any) => (
    <div className="overflow-x-auto mb-6">
      <table className="w-full border-collapse" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th
      className="border border-white/10 px-4 py-3 bg-white/5 font-semibold text-left text-white"
      {...props}
    />
  ),
  td: (props: any) => (
    <td className="border border-white/10 px-4 py-3 text-white/70" {...props} />
  ),
  img: (props: any) => (
    <img className="rounded-xl my-6 max-w-full border border-white/10" {...props} />
  ),
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[180px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-midnight-600/20 rounded-full blur-[150px]" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        </div>

        <article className="relative z-10 container-narrow pt-32 pb-20">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/60 hover:text-brand-400 transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Voltar ao blog</span>
          </Link>

          {/* Header */}
          <header className="mb-12">
            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-500/10 text-brand-400 text-sm rounded-full border border-brand-500/20"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="heading-lg text-white mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/50 pb-8 border-b border-white/10">
              {post.date && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-400" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('pt-BR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
              )}
              {post.readingTime && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-400" />
                  <span>{post.readingTime} min de leitura</span>
                </div>
              )}
              {post.author && (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-brand-400" />
                  <span>{post.author}</span>
                </div>
              )}
            </div>
          </header>

          {/* Content */}
          <div className="prose-dark max-w-none">
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [
                    rehypeSlug,
                    [
                      rehypeAutolinkHeadings,
                      {
                        behavior: 'wrap',
                        properties: {
                          className: ['anchor'],
                        },
                      },
                    ],
                    rehypeHighlight,
                  ],
                },
              }}
            />
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-white/60 hover:text-brand-400 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Ver todos os artigos</span>
              </Link>

              <div className="flex items-center gap-4">
                <span className="text-white/40 text-sm">Compartilhar:</span>
                <ShareButton />
              </div>
            </div>
          </footer>
        </article>
      </main>
      <Footer />
    </>
  );
}
