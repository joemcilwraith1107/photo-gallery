import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

config.autoAddCss = false

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="shrink basis-11/12">{children}</main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  )
}
