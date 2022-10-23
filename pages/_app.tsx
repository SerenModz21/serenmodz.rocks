import "../styles/globals.css";
import type { AppProps } from "next/app";
import nextSeo from "@root/next-seo.config";
import { DefaultSeo } from "next-seo";
import { SWRConfig } from "swr";
import fetcher from "@utils/fetcher";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import ScrollToTop from "@components/ScrollToTop";

export default function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => themeChange(false), []);

  return (
    <SWRConfig value={{ fetcher }}>
      <DefaultSeo {...nextSeo(router)} />
      <Component {...pageProps} />
      <ScrollToTop />
    </SWRConfig>
  )
}
