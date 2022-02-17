// import NextImage from "next/image";
import NextLink from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";
import type { IconType } from "react-icons";

export default function Home() {
  return (
    <div>
      {/* navbar */}
      <div className="h-[5vh] w-full bg-gray-200">
        {/* TODO: add navbar  */}
      </div>

      {/* content */}
      <div className="flex h-[90vh] w-full flex-wrap justify-center bg-gray-200">
        <div className="my-auto items-center justify-center space-y-5 p-5 lg:inline-flex lg:space-x-10 lg:space-y-0">
          <img
            src="/logo.png"
            className="h-[350px] animate-float rounded-full"
            alt="Seren_Modz 21 Logo"
          />

          <div>
            <h1 className="text-5xl font-semibold">Seren_Modz 21</h1>
            <p className="mt-1 text-3xl">
              Welcome to my website! My name is Seren_Modz 21.
            </p>

            <div className="mt-10 flex flex-row space-x-5">
              <Social href="/github" icon={FaGithub} />
              <Social href="/twitter" icon={FaTwitter} />
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="h-[5vh] w-full bg-gray-200">{/* TODO: add footer */}</div>
    </div>
  );
}

const Social = (props: { href: string; icon: IconType }) => (
  <NextLink href={props.href} passHref>
    <a target="_blank" rel="noopener noreferrer">
      <button className="inline-flex items-center rounded transition ease-in-out hover:-translate-y-1 hover:scale-110">
        <props.icon className="h-10 w-10 fill-current" />
      </button>
    </a>
  </NextLink>
);
