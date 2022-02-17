import NextImage from "next/image";
import { FaGithub, FaTwitter } from "react-icons/fa";
import type { IconType } from "react-icons";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo title="Home" />
      <div className="flex h-[90vh] w-full justify-center">
        <div className="my-auto items-center justify-center space-y-5 p-5 lg:inline-flex lg:space-x-10 lg:space-y-0">
          <NextImage
            src="/logo.png"
            alt="Seren_Modz 21"
            height={300}
            width={300}
            className="rounded-full"
          />

          <div>
            <h1 className="text-5xl">Seren_Modz 21</h1>
            <p className="mt-1 text-3xl">
              Welcome to my website! My name is Seren_Modz 21.
            </p>

            <div className="mt-10 space-x-5">
              <Social href="/github" name="GitHub" icon={FaGithub} />
              <Social href="/twitter" name="Twitter" icon={FaTwitter} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Social = (props: { href: string; icon: IconType; name: string }) => (
  <a href={props.href} target="_blank" rel="noopener noreferrer">
    <button
      aria-label={props.name}
      className="transition ease-in-out hover:scale-110"
    >
      <props.icon className="h-10 w-10" />
    </button>
  </a>
);
