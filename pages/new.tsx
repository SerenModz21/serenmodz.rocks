import NextLink from "next/link";
import ThemeToggle from "@components/ThemeToggle";
import { NowPlaying } from "@components/NowPlaying";
import { display, LinkWithFile, pages, socials } from "@utils/constants";
import FullImage from "@components/FullImage";

export default function New() {
  return (
    <div className="container mx-auto flex min-h-screen flex-col justify-between border-2 md:max-w-2xl">
      {/* navbar */}
      <div className="inline-flex h-20 w-full items-center justify-between border-b-2 px-4">
        <nav className="space-x-2">
          {pages.map(({ href, name }) => (
            <NextLink href={href} key={href}>
              {name}
            </NextLink>
          ))}
        </nav>
        <ThemeToggle />
      </div>

      {/* main */}
      <main className="space-y-6 border-y-2 px-4">
        <div className="inline-flex items-center space-x-6">
          <div className="relative h-40 w-40">
            <FullImage
              src="/logo.png"
              alt="Seren_Modz 21"
              className="rounded-full"
            />
          </div>
          <div>
            <h1 className="text-4xl">Seren_Modz 21</h1>
            <p className="mt-1 text-xl">A self-taught backend programmer.</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl">Introduction</h2>
          <p>
            Hello, my name is Seren_Modz 21. I&#39;m a full-time college student
            from the United Kingdom. I&#39;m also a young tech-savvy guy who
            likes to be around technology; more specifically, programming.
          </p>
        </div>

        {display.map(({ name, data }) => (
          <div key={name}>
            <h3 className="text-xl">• {name}</h3>
            <div className="mt-1 space-x-2">
              {data.map((x) => mapIcons(name, x))}
            </div>
          </div>
        ))}
      </main>

      {/* footer */}
      <footer className="inline-flex h-20 w-full items-center justify-between border-t-2 px-4">
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
    </div>
  );
}

function mapIcons(group: string, props: LinkWithFile) {
  const dir = group.toLowerCase();
  const file = props.file ?? props.name.toLowerCase();

  return (
    <a
      href={props.href}
      key={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        aria-label={props.name}
        title={props.name}
        className="relative h-9 w-9 transition-all ease-in-out hover:scale-110"
      >
        <FullImage src={`/icons/${dir}/${file}.svg`} alt={props.name} />
      </button>
    </a>
  );
}
