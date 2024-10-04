import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import { Navbar } from '../components/Navbar'
import { ThemeProvider } from '@/components/theme-provider'
import { SEO } from '@/config/seo'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', preload: true })
const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  preload: true
})

export const metadata = SEO

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <main className="prose dark:prose-invert max-w-none">
                {children}
              </main>
            </div>
            <Navbar />
          </div>
        </ThemeProvider>
        <Script id="console-message" strategy="afterInteractive">
          {`
            fetch('/api/joke')
              .then(response => response.json())
              .then(data => {
                console.log("%c" + data.joke, "color: #00a8e8; font-size: 18px; font-weight: bold;");
              });
          `}
        </Script>
      </body>
    </html>
  )
}