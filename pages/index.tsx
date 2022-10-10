import NextImage from "next/image";
import { FaCode, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "@utils/constants";
import ExternalLink from "@components/ExternalLink";

export default function Home() {
  return (
    <>
      {/* hero */}
      <div className="hero mb-auto h-screen bg-base-200">
        <div className="align-center hero-content text-center">
          <div className="max-w-sm">
            <div className="relative mx-auto h-48 w-48">
              <NextImage
                src="/logo.png"
                alt=""
                className="min-w-sm mask mask-circle shadow-xl"
                layout="fill"
              />
            </div>

            <div className="divider"></div>

            <h1 className="text-5xl font-bold">Seren_Modz 21</h1>
            {/*<p className="pt-6">A self-taught backend programmer.</p>*/}
            <p className="py-6">
              Hello! My name is Seren_Modz 21, an inspired back-end developer.
              I&#39;m from the United Kingdom and I&#39;m a full-time college student.
              Currently, I mainly work on private projects but I plan to grow
              and achieve my goal of working on more open source projects.
            </p>
            {/*<button className="btn btn-primary">Get Started</button>*/}
            <div className="inline-flex min-w-full justify-evenly">
              <ExternalLink href={Link.GitHub}>
                <FaGithub className="link-button h-10 w-10" />
              </ExternalLink>
              <ExternalLink href={Link.Twitter}>
                <FaTwitter className="link-button h-10 w-10" />
              </ExternalLink>
              <ExternalLink href={Link.Source}>
                <FaCode className="link-button h-10 w-10" />
              </ExternalLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
