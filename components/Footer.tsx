import { NowPlaying } from "@components/NowPlaying";
import { FaGithub, FaTwitter, FaCode } from "react-icons/fa";
import { IconType } from "react-icons";

export default function Footer() {
  return (
    <div className="h-20 w-full">
      <footer className="inline-flex h-full w-full items-center justify-between px-4">
        <div className="max-w-md">
          <NowPlaying />
        </div>

        <div className="inline-flex space-x-3">
          <Social href="/github" name="GitHub" icon={FaGithub} />
          <Social href="/twitter" name="Twitter" icon={FaTwitter} />
          <Social
            href="/github/serenmodz.rocks"
            name="Source Code"
            icon={FaCode}
          />
        </div>
      </footer>
    </div>
  );
}

const Social = (props: { href: string; icon: IconType; name: string }) => (
  <a href={props.href} target="_blank" rel="noopener noreferrer">
    <button
      aria-label={props.name}
      title={props.name}
      className="transition ease-in-out hover:scale-110"
    >
      <props.icon className="h-6 w-6" />
    </button>
  </a>
);
