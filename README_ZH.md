# 主页

中文 | [English](./README.md)

🚧 项目简介
• 响应式设计，适配移动端。
• 丝滑的滚动体验
• UI简洁美观
• 博客功能
• SEO优化

## 使用的技术
- Next.js
- React
- TailwindCSS
- TypeScript

🚀 使用方法
1. 克隆此仓库或在 [这里](https://github.com/mynxg/home-template/archive/refs/heads/main.zip) 下载，然后部署它。
or
```bash
git clone https://github.com/mynxg/home-template.git
```

1.2 安装依赖
```bash
pnpm install
```
1.3 运行项目
```bash
npm  run  dev
```
1.4 打包项目
```bash
npm  run  build
```

2. 修改数据
   在 `src\data\resume.tsx` 文件中修改你的个人信息。

   ```javascript:resume.tsx
   export const NAV_ITEMS = [
   { href: "/", icon: HomeIcon, label: "首页" },
   { href: "/blog", icon: BookOpenIcon, label: "博客" },
   { href: "https://github.com/mynxg", icon: GithubIcon, label: "GitHub" },
   { href: "https://gitee.com/mynxg", icon: Icons.gitee, label: "Gitee" },
   { href: "https://dub.sh/keney-x", icon: Icons.x, label: "X" },
   { href: "mailto:nxg@nnxx.me", icon: MailIcon, label: "Email" },
   ];
   ...
   ```

在 `content` 目录中添加你的博客文章。

```markdown:content\first.mdx
   ---
   title: "My First Blog Post"
   publishedAt: "2023-06-18"
   summary: "This is my first blog post using MDX."
   ---

   # My First Blog Post

   This is my first blog post using MDX.

```


3. 网站图标 & 加载动画（可选）
   在 `public` 目录中，用你自己的图标或加载动画替换。
   - `favicon.ico` 是显示在浏览器标签上的网站图标。
   - `avatar.jpg` 是头像。


⚡ 部署到 GitHub Pages
1. Fork 这个仓库。
2. 转到你自己仓库的设置 - Setting - Pages - Deploy from a branch - Branch(main/root)

⚡ 部署到 Vercel
1. Fork 这个仓库。
2. 访问你自己的 Vercel 仪表板。
3. 创建一个新项目并从 GitHub 导入仓库。
4. 无需对默认设置进行任何更改，只需点击 Deploy。
5. 中国大陆可能需要绑定自定义域名才能访问 Vercel。


## 许可证
[GLWT]



