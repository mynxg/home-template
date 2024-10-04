import { HomeIcon, BookOpenIcon, MailIcon, GithubIcon, GlobeIcon } from "lucide-react";
import { Icons } from "@/components/icons";

export const SITE_DATA = {
  name: "所遇所思",
  description: "觉察新知",
  url: "https://nnxx.me",
};

export const NAV_ITEMS = [
  { href: "/", icon: HomeIcon, label: "首页" },
  { href: "/blog", icon: BookOpenIcon, label: "博客" },
  { href: "https://github.com/mynxg", icon: GithubIcon, label: "GitHub" },
  { href: "https://gitee.com/mynxg", icon: Icons.gitee, label: "Gitee" },
  { href: "https://dub.sh/keney-x", icon: Icons.x, label: "X" },
  { href: "mailto:nxg@nnxx.me", icon: MailIcon, label: "Email" },
];

export const PROJECTS = [
  {
    title: "AI 助手",
    href: "https://ai-assistant.example.com",
    dates: "2023年1月 - 至今",
    active: true,
    description: "基于GPT-4的智能对话系统，提供多领域的智能问答和任务辅助。",
    technologies: ["Go", "TensorFlow", "NLP", "React", "Node.js"],
    links: [
      {
        type: "网站",
        href: "https://ai-assistant.example.com",
        icon: <GlobeIcon className="w-3 h-3" />,
      },
      {
        type: "源码",
        href: "https://github.com/yourusername/ai-assistant",
        icon: <GithubIcon className="w-3 h-3" />,
      },
    ],
    image: "/images/ai-assistant.jpg",
    video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
  },
  {
    title: "区块链投票",
    href: "https://blockchain-voting.example.com",
    dates: "2022年6月 - 2023年12月",
    active: false,
    description: "去中心化的安全投票平台，利用区块链技术确保投票的透明性和不可篡改性。",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React", "Node.js"],
    links: [
      {
        type: "网站",
        href: "https://blockchain-voting.example.com",
        icon: <GlobeIcon className="w-3 h-3" />,
      },
      {
        type: "源码",
        href: "https://github.com/yourusername/blockchain-voting",
        icon: <GithubIcon className="w-3 h-3" />,
      },
    ],
    image: "/images/blockchain-voting.jpg",
    video: "https://cdn.magicui.design/bento-grid.mp4",
  },
  // ... 可以继续添加其他项目
];

export const INSIGHTS = [
  {
    title: "量子计算的未来",
    description: "探索量子supremacy的影响",
    date: "2023-07-15",
  },
  {
    title: "5G与物联网革命",
    description: "连接世界的新方式",
    date: "2023-07-10",
  },
  {
    title: "AI在医疗领域的应用",
    description: "改变诊断和治疗的方式",
    date: "2023-07-05",
  },
];

//技能
export const SKILLS = [
  'Java', 'Go', 'Mysql', 'Docker', 'Dubbo', 'Snail Job', 'React', 'Next.js', 'Typescript', 'Node.js'
];

export const PERSONAL_INFO = {
  name: "keney",
  title: "全栈开发工程师",
  avatar: "/avatar.jpg", // 请确保在 public/images 目录下有这个图片
  bio: "热衷于探索最新的web技术和人工智能应用。拥有1年以上的全栈开发经验，专注于创建高效、可扩展的web应用。在空闲时间，我喜欢参与开源项目和技术社区分享。",
  about: `我是一名热衷于技术创新的全栈开发工程师，拥有多年的软件开发经验。我专注于使用最新的技术栈构建高效、可扩展的web应用，并且对人工智能和区块链技术有浓厚的兴趣。在工作之余，我积极参与开源项目，并热衷于在技术社区分享知识和经验。

我的技术栈涵盖了前端和后端开发，包括但不限于React、Next.js、Node.js、Python和Java。我热衷于学习新技术，并将其应用到实际项目中。我相信技术的力量可以改变世界，并致力于创造有意义的、能够解决实际问题的应用。

除了编码，我也非常注重软件开发的其他方面，如用户体验设计、性能优化和安全性。我追求代码的清晰性和可维护性，并且热衷于采用最佳实践和设计模式。

在未来，我希望能够继续在技术领域深耕，同时也期待能够mentor新人，帮助他们在软件开发的道路上成长。我相信，通过不断学习和分享，我们可以共同推动技术的进步，创造更美好的未来。`
};

export const FRIEND_LINKS = [
  {
    title: "周刊",
    description: "weekly",
    url: "https://weekly.nnxx.me"
  },
  {
    title: "博客",
    description: "分享后端开发经验",
    url: "https://blogs.lxip.top"
  },
//   {
//     title: "王五的AI探索",
//     description: "人工智能和机器学习的最新进展",
//     url: "https://wangwu.ai"
//   },
  // 可以根据需要添加更多友链
];

export const homePageData = {
  title: "所遇所思",
  subtitle: "探索创新，洞察未来",
  sections: {
    personalInfo: {
      title: "关于我"
    },
    skills: {
      title: "技能"
    },
    projects: {
      title: "作品",
      buttonText: "了解更多"
    },
    insights: {
      title: "前沿洞察",
      buttonText: "阅读全文"
    },
    friendLinks: {
      title: "导航",
      buttonText: "访问"
    }
  }
};