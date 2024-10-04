"use client";

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PROJECTS, FRIEND_LINKS, SKILLS, PERSONAL_INFO, homePageData } from '@/data/resume'
import { useTheme } from 'next-themes'
import { ExternalLink } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer';

const DynamicProjectSection = dynamic(() => import('@/components/ProjectSection'))

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme, setTheme } = useTheme()
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 个人简介模块 */}
        <section className="mb-16">
          <div className="flex flex-col items-center gap-8 mt-4">
            <div className="w-48 h-48 relative rounded-full overflow-hidden">
              <Image
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                width={192}
                height={192}
                className="rounded-full"
                priority
              />
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2 font-heading">{PERSONAL_INFO.name}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4 font-heading">{PERSONAL_INFO.title}</p>
              <p className="text-gray-700 dark:text-gray-300">{PERSONAL_INFO.bio}</p>
            </div>
          </div>
        </section>

        {/* 关于模块 */}
        <section className="mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 pb-2 border-b-4 border-yellow-500 inline-block font-heading">
            关于
          </h2>
          <div className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
            {PERSONAL_INFO.about}
          </div>
        </section>

        {/* 技能模块 */}
        <section className="mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 pb-2 border-b-4 border-green-500 inline-block font-heading">
            {homePageData.sections.skills.title}
          </h2>
          <div className="flex flex-wrap gap-3 mt-6">
            {SKILLS.map((skill, index) => (
              <Badge
                key={skill}
                variant="outline"
                className={`text-sm py-1 px-3 rounded-full transition-all duration-300 hover:scale-110 cursor-default
                  ${getSkillColor(index)}`}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        {/* 作品模块 */}
        <div ref={ref}>
          {inView && <DynamicProjectSection projects={PROJECTS} title={homePageData.sections.projects.title} />}
        </div>

        {/* 友情链接模块 */}
        <section>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 pb-2 border-b-4 border-purple-500 inline-block font-heading">
            {homePageData.sections.friendLinks.title}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
            {FRIEND_LINKS.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 shadow-sm hover:shadow-md hover:-translate-y-1"
                style={{animationDelay: `${(index + PROJECTS.length) * 100}ms`}}
              >
                <h3 className="text-sm font-semibold mb-1 text-purple-600 dark:text-purple-300 truncate">{link.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
                  {link.description}
                </p>
                <span className="inline-flex items-center text-xs text-purple-500 hover:text-purple-600 transition-colors">
                  访问 <ExternalLink className="ml-1 w-3 h-3" />
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

function getSkillColor(index: number) {
  const colors = [
    "bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800",
    "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-800",
    "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900 dark:text-yellow-300 dark:hover:bg-yellow-800",
    "bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900 dark:text-red-300 dark:hover:bg-red-800",
    "bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-300 dark:hover:bg-purple-800",
    "bg-pink-100 text-pink-800 hover:bg-pink-200 dark:bg-pink-900 dark:text-pink-300 dark:hover:bg-pink-800",
  ];
  return colors[index % colors.length];
}