import { NextSeo } from "next-seo";
import NextImage from "next/image";

export default function NotFound() {
  return (
    <main className="inline-flex flex-col items-center">
      <NextSeo title="Page not found" />

      <h1 className="text-4xl font-bold">404</h1>
      <h2 className="mt-2 text-2xl font-medium">
        This page could not be found
      </h2>

      <div className="relative h-96 w-96">
        {/* credits to https://error404.fun/ for the image */}
        <NextImage src="/404.svg" layout="fill" objectFit="cover" alt="404" />
      </div>
    </main>
  );
}
