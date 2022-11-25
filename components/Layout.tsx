import Footer from './Footer'
import Head from 'next/head'
import ScrollToTop from './ScrollToTop'

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Head>
        <title>Photo Gallery</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className="shrink basis-11/12">{children}</main>
      <ScrollToTop />
      <Footer />
    </div>
  )
}
