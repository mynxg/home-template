import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
  project: {
    title: string;
    href: string;
    dates: string;
    active: boolean;
    description: string;
    technologies: string[];
    links: { type: string; href: string; icon: React.ReactNode }[];
    image?: string;
    video?: string;
  }
}

const ProjectCard: React.FC<ProjectProps> = React.memo(({ project }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
      <div className="flex flex-col h-full">
        <div className="w-full h-48 relative">
          {project.video ? (
            <video 
              src={project.video} 
              className="w-full h-full object-cover" 
              autoPlay 
              loop 
              muted 
              playsInline
            />
          ) : project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
            />
          ) : null}
        </div>
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-300">
            <Link href={project.href} className="hover:underline">{project.title}</Link>
            {project.active && <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">活跃</span>}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{project.dates}</p>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <span key={techIndex} className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4 mt-auto">
            {project.links.map((link, linkIndex) => (
              <Link 
                key={linkIndex} 
                href={link.href}
                className="flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                {link.icon}
                <span className="ml-1">{link.type}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProjectCard;