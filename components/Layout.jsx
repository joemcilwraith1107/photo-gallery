import Footer from '../components/Footer';
import Head from 'next/head';
import ScrollToTop from './ScrollToTop';

export default function Layout({ children }) {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Head></Head>

            <main className="basis-11/12 shrink">{children}</main>
            <ScrollToTop />
            <Footer />
        </div>
    )
}