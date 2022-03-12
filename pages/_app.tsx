import "../styles/globals.css";
import type { AppProps } from "next/app";
import nextSeo from "@root/next-seo.config";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...nextSeo(router)} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
