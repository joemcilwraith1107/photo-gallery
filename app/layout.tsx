import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Metadata, Viewport } from 'next'

config.autoAddCss = false

export const metadata: Metadata = {
  title: 'Photo Gallery',
  description: 'A photo gallery using nextjs',
  icons: {
    icon: '/icon.png',
  },
}

export const viewPort: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
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
