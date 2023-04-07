import NextImage from "next/image";
import NextLink from "next/link";
import { NextSeo } from "next-seo";
import Layout from "@components/Layout";

import image from "@public/404.svg";

export default function NotFound() {
    return (
        <Layout hideFooter>
            <NextSeo title="Page not found" />
            <div className="align-center flex flex-col justify-center self-center text-center">
                <NextImage src={image} alt="404" priority />

                <div className="text-5xl font-bold">404</div>
                <p className="text-2xl font-light md:text-3xl">
                    Sorry, this page couldn&#39;t be found.
                </p>
                <p className="mb-8">
                    But dont worry, you can find plenty of other things on the
                    homepage.
                </p>

                <NextLink href="/" passHref replace>
                    <button className="btn-info btn">Return to Homepage</button>
                </NextLink>
            </div>
        </Layout>
    );
}
