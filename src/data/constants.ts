import { HomeIcon, BookOpenIcon, MailIcon, GithubIcon, GlobeIcon } from "lucide-react";
import { Icons } from "@/components/icons";

export const SKILLS: string[] = [
  'Java', 'Go', 'Mysql', 'Docker', 'Dubbo', 'Snail Job', 'React', 'Next.js', 'Typescript', 'Node.js'
]

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
            icon: "GlobeIcon",
          },
          {
            type: "源码",
            href: "https://github.com/yourusername/ai-assistant",
            icon: "GithubIcon",
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
            icon: "GlobeIcon",
          },
          {
            type: "源码",
            href: "https://github.com/yourusername/blockchain-voting",
            icon: "GithubIcon",
          },
        ],
        image: "/images/blockchain-voting.jpg",
        video: "https://cdn.magicui.design/bento-grid.mp4",
      },
]

export interface FriendLink {
  title: string;
  description: string;
  url: string;
}

export const FRIEND_LINKS: FriendLink[] = [
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
];