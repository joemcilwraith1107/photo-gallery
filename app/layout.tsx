import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Footer from '@components/Footer'
import ScrollToTop from '@components/ScrollToTop'
import { Metadata } from 'next'

config.autoAddCss = false

export const metadata: Metadata = {
  title: 'Photo Gallery',
  description: 'A photo gallery using nextjs',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout(props: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen flex-col justify-between">
          <main className="shrink basis-11/12">
            {props.children}
            {props.modal}
          </main>
          <ScrollToTop />
          <Footer />
        </div>
      </body>
    </html>
  )
}
