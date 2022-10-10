import NextImage from "next/image";
import NextLink from "next/link";
import { NextSeo } from "next-seo";

export default function NotFound() {
  return (
    <>
      {/* TODO: make this better */}
      <NextSeo title="Page not found" />
      <div className="hero mb-auto h-screen bg-base-200">
        <div className="hero-content mx-auto flex-col lg:flex-row-reverse">
          <div className="relative h-[1400px] w-[1400px] sm:h-96 sm:w-96">
            {/* credits to https://error404.fun/ for the image */}
            <NextImage
              layout="fill"
              objectFit="cover"
              src="/404.svg"
              alt="404"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold">Oh no!</h1>
            <p className="py-6 text-lg">This page could not be found.</p>
            <NextLink href="/" passHref replace>
              <button className="btn btn-info">Return Home</button>
            </NextLink>
          </div>
        </div>
      </div>
    </>
  );
}
