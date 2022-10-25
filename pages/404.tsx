import NextImage from "next/image";
import NextLink from "next/link";
import { NextSeo } from "next-seo";
import Layout from "@components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <NextSeo title="Page not found" />
      <div className="justify-center align-center text-center">
        <NextImage
          // layout="fill"
          objectFit="cover"
          src="/404.svg"
          alt="404"
          height={400}
          width={400}
        />

        <h1 className="text-4xl font-bold">Page not found!</h1>
        <p className="py-6 text-lg">
          Sorry, we couldn&#39;t find the page you&#39;re looking for.
        </p>
        <NextLink href="/" passHref replace>
          <button className="btn btn-info">Go back Home</button>
        </NextLink>
      </div>
    </Layout>
  );
}
