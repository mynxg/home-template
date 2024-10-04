import { Metadata } from 'next'
import { SITE_DATA } from '@/data/resume'
import { SEO_TEXT } from './seo-text'

export const SEO: Metadata = {
  metadataBase: new URL(SITE_DATA.url),
  title: {
    default: SEO_TEXT.siteName,
    template: `%s | ${SEO_TEXT.siteName}`,
  },
  description: SEO_TEXT.description,
  keywords: SEO_TEXT.keywords,
  authors: [{ name: SEO_TEXT.author }],
  creator: SEO_TEXT.author,
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: SITE_DATA.url,
    siteName: SEO_TEXT.siteName,
    title: SEO_TEXT.siteName,
    description: SEO_TEXT.description,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: SEO_TEXT.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_TEXT.siteName,
    description: SEO_TEXT.description,
    images: ['/og-image.jpg'],
    creator: SEO_TEXT.twitterHandle,
    site: SEO_TEXT.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}