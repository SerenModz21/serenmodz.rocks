import { NextSeo } from "next-seo";
import NextLink from "next/link";
import Layout from "@components/Layout";
import FullImage from "@components/FullImage";

export default function NotFound() {
  return (
    <>
      <NextSeo title="Page not found" />
      <Layout className="inline-flex flex-col-reverse items-center justify-center sm:flex-row">
        <div>
          <h1 className="text-4xl font-bold">Oh no!</h1>
          <h2 className="mt-2 text-lg font-medium">
            This page could not be found
          </h2>

          <br />

          <NextLink href="/" passHref replace>
            <button
              type="button"
              // className="rounded-md border-2 border-solid p-2 outline-gray-500"
              className="rounded-full bg-gray-100 px-4 py-2 font-medium text-gray-800 transition-all ease-in-out hover:bg-gray-200 dark:bg-gray-700 dark:text-white hover:dark:bg-gray-800"
            >
              Return Home
            </button>
          </NextLink>
        </div>

        <div className="relative h-[350px] w-[300px] sm:h-96 sm:w-96">
          {/* credits to https://error404.fun/ for the image */}
          <FullImage src="/404.svg" alt="404" />
        </div>
      </Layout>
    </>
  );
}
