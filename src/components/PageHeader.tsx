import { SEO_TEXT } from '@/config/seo-text'

export const PageHeader = () => {
  return (
    <header className="mb-2">
      <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 animate-gradient-x">
        {SEO_TEXT.siteName}
      </h1>
      <p className="text-center text-xs text-gray-600 dark:text-gray-400">{SEO_TEXT.description}</p>
    </header>
  )
}