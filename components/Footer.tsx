import { NowPlaying } from "@components/NowPlaying";
import { socials } from "@utils/constants";

export default function Footer() {
  return (
    <footer className="inline-flex h-20 w-full flex-wrap items-center justify-between px-4">
      <NowPlaying />
      <div className="space-x-2">
        {socials.map((social) => (
          <a
            href={social.href}
            key={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              aria-label={social.name}
              title={social.name}
              className="transition-all ease-in-out hover:scale-110"
            >
              <social.icon className="h-6 w-6" />
            </button>
          </a>
        ))}
      </div>
    </footer>
  );
}
