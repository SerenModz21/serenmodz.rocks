import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import nextSeo from "@root/next-seo.config";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...nextSeo(router)} />
      <div className="min-h-screen w-full">
        <div className="mx-auto flex min-h-screen max-w-2xl flex-col justify-between rounded-2xl px-4 shadow-2xl dark:shadow-none">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
