import "../styles/globals.css";
import type { AppProps } from "next/app";
import nextSeo from "@root/next-seo.config";
import { DefaultSeo } from "next-seo";
import { SWRConfig } from "swr";
import fetcher from "@utils/fetcher";
import ScrollToTop from "@components/ScrollToTop";
import { ThemeProvider } from "next-themes";

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <ThemeProvider>
        <DefaultSeo {...nextSeo(router)} />
        <Component {...pageProps} />
        <ScrollToTop />
      </ThemeProvider>
    </SWRConfig>
  )
}
