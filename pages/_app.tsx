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
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
