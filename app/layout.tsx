import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
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
        {props.children}
        {props.modal}
      </body>
    </html>
  )
}
