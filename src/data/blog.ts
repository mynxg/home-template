import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

export function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string) {
  const filePath = path.join(process.cwd(), "content", `${slug}.mdx`);
  let source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);
  return {
    content,
    metadata: metadata as Metadata,
    slug,
  };
}

export async function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), 'content');
  const fileNames = getMDXFiles(postsDirectory);
  const posts = await Promise.all(fileNames.map(async (fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const { metadata } = await getPost(slug);
    return {
      slug,
      ...metadata,
    };
  }));
  return posts;
}