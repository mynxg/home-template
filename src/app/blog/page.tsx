import Link from 'next/link';
import { getAllPosts } from '@/data/blog';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-8">博客</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="block hover:bg-gray-100 dark:hover:bg-gray-800 p-4 rounded-lg transition-colors duration-200">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-400">{post.summary}</p>
              <p className="text-sm text-gray-500 mt-2">{post.publishedAt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}