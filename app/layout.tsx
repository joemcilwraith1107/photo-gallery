import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Metadata } from 'next'
import '../styles/globals.css'

config.autoAddCss = false

export const metadata: Metadata = {
  title: 'Photo Gallery',
  description: 'A photo gallery using nextjs',
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout(props: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {props.children}
        {props.modal}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
