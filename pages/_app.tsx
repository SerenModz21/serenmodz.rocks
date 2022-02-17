import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import nextSeo from "../next-seo.config";
import { DefaultSeo } from "next-seo";

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <DefaultSeo {...nextSeo(router)} />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
