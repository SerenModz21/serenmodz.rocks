import { NextSeo } from "next-seo";
import Layout from "@components/Layout";
import FullImage from "@components/FullImage";
import { display, LinkWithFile } from "@utils/constants";

export default function Home() {
  return (
    <>
      <NextSeo title="Home" />
      <Layout className="space-y-6">
        <div className="inline-flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-6">
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
            <h3 className="text-xl">{name}</h3>
            <div className="mt-1 space-x-2">
              {data.map((x) => mapIcons(name, x))}
            </div>
          </div>
        ))}
      </Layout>
    </>
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
