import "@styles/globals.css";

import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import ScrollToTop from "@components/ScrollToTop";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { title, description, url } from "@utils/constants";

import { Providers } from "./providers";

export const metadata: Metadata = {
    title,
    description,
    metadataBase: new URL(url),
    openGraph: {
        type: "website",
        url: "/",
        title,
        description,
    },
    twitter: {
        card: "summary",
        creator: "@SerenModz21",
        site: "@SerenModz21",
    },
    alternates: {
        canonical: "/",
    }
}

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="mx-0 sm:mx-auto sm:max-w-3xl min-h-screen grid grid-rows-[auto_1fr_auto]">
                <Providers>
                    <Navbar />
                    <main>
                        {children}
                        <ScrollToTop />
                    </main>
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}