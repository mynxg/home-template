# Home

[中文](./README_ZH.md) | English

🚧 Project Overview
• Responsive design, mobile-friendly.
• Smooth scrolling experience
• Clean and attractive UI
• Blog functionality
• SEO optimization

## Technologies Used
- Next.js
- React
- TailwindCSS
- TypeScript

🚀 Usage Instructions
1. Clone this repository or download it from [here](https://github.com/mynxg/home-template/archive/refs/heads/main.zip), then deploy it.
or
```bash
git clone https://github.com/mynxg/home-template.git
```

1.2 Install dependencies
```bash
pnpm install
```
1.3 Run the project
```bash
npm run dev
```
1.4 Build the project
```bash
npm run build
```

2. Modify data
   Edit your personal information in the `src\data\resume.tsx` file.

   ```javascript:resume.tsx
   export const NAV_ITEMS = [
   { href: "/", icon: HomeIcon, label: "Home" },
   { href: "/blog", icon: BookOpenIcon, label: "Blog" },
   { href: "https://github.com/mynxg", icon: GithubIcon, label: "GitHub" },
   { href: "https://gitee.com/mynxg", icon: Icons.gitee, label: "Gitee" },
   { href: "https://dub.sh/keney-x", icon: Icons.x, label: "X" },
   { href: "mailto:nxg@nnxx.me", icon: MailIcon, label: "Email" },
   ];
   ...
   ```

Add your blog posts in the `content` directory.

```markdown:content\first.mdx
   ---
   title: "My First Blog Post"
   publishedAt: "2023-06-18"
   summary: "This is my first blog post using MDX."
   ---

   # My First Blog Post

   This is my first blog post using MDX.

```


3. Website Icon & Loading Animation (Optional)
   Replace with your own icons or loading animations in the `public` directory.
   - `favicon.ico` is the website icon displayed on the browser tab.
   - `avatar.jpg` is the avatar.


⚡ Deploy to GitHub Pages
1. Fork this repository.
2. Go to your repository's Settings - Pages - Deploy from a branch - Branch(main/root)

⚡ Deploy to Vercel
1. Fork this repository.
2. Visit your own Vercel dashboard.
3. Create a new project and import the repository from GitHub.
4. No need to change any default settings, just click Deploy.
5. Users in mainland China may need to bind a custom domain to access Vercel.


## License
[GLWT]