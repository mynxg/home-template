import React from 'react'
import ProjectCard from './ProjectCard'

interface ProjectSectionProps {
  projects: any[] // 根据您的项目数据结构定义更具体的类型
  title: string
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects, title }) => {
  return (
    <section className="mb-24">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 pb-2 border-b-4 border-blue-500 inline-block font-heading">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectSection