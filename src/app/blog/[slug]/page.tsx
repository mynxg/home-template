import Link from "next/link";
import { getPost, getMDXFiles } from '@/data/blog';
import path from 'path';
import { ArrowLeft } from 'lucide-react';
import MDXComponent from '@/components/mdx';
import { SITE_DATA } from '@/data/resume';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { metadata } = await getPost(params.slug);
  return {
    title: metadata.title,
    description: metadata.summary,
    openGraph: {
      title: metadata.title,
      description: metadata.summary,
      type: 'article',
      publishedTime: metadata.publishedAt,
      url: `${SITE_DATA.url}/blog/${params.slug}`,
      images: [
        {
          url: metadata.image || `${SITE_DATA.url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: metadata.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.summary,
      images: [metadata.image || `${SITE_DATA.url}/og-image.jpg`],
    },
  };
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'content');
  const fileNames = getMDXFiles(postsDirectory);
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.mdx$/, ''),
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { content, metadata } = await getPost(params.slug);

  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <Link 
        href="/blog" 
        className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        返回博客列表
      </Link>
      <h1 className="font-medium text-3xl mb-4 tracking-tighter">{metadata.title}</h1>
      <p className="text-gray-500 mb-8">{metadata.publishedAt}</p>
      <div className="prose dark:prose-invert max-w-none">
        <MDXComponent source={content} />
      </div>
    </section>
  );
}