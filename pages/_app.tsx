import "../styles/globals.css";
import type { AppProps } from "next/app";
import nextSeo from "@root/next-seo.config";
import { DefaultSeo } from "next-seo";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { SWRConfig } from "swr";
import fetcher from "@utils/fetcher";

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <DefaultSeo {...nextSeo(router)} />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </SWRConfig>
  )
}
