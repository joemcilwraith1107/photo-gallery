import Footer from '../components/Footer';
import Head from 'next/head';

export default function Layout({ children }) {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Head></Head>

            <main className="flex-initial">{children}</main>

            <Footer />
        </div>
    )
}