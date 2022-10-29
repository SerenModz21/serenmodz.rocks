import NextImage from "next/image";
import GithubCard from "@components/GithubCard";
import Card from "@components/Card";
import Layout from "@components/Layout";

import logo from "@public/logo.png";

export default function Home() {
  return (
    <Layout>
      {/* logo + content */}
      <div className="w-full px-4 sm:p-8 flex flex-col sm:flex-row justify-center align-center">
        {/* logo */}
        <div className="h-32 sm:h-40 w-32 sm:w-40 mb-2 sm:mb-0">
          <NextImage src={logo} alt="" height={160} width={160} className="rounded-full" priority />
        </div>
        <div className="flex flex-col sm:pl-8">
          <h1 id="main" className="text-2xl font-bold">Seren_Modz 21</h1>
          <p className="sm:max-w-md py-1 pr-2 sm:pr-0">
            Hello! My name is Seren_Modz 21, an inspired back-end developer.
            I&#39;m from the United Kingdom and I&#39;m a full-time college student.
            Currently, I mainly work on private projects but I plan to grow
            and achieve my goal of working on more open source projects.
          </p>
        </div>
      </div>

      {/* projects */}
      <div className="w-full pl-4 pr-8 sm:px-8 pb-8 pt-2 sm:pt-0">
        <h2 id="projects" className="text-xl font-bold mb-4">Projects</h2>
        <div className="grid gap-4">
          <GithubCard
            name="paste.gg"
            description="An easy-to-use library for interacting with the Paste.GG API."
            url="https://github.com/SerenModz21/paste.gg"
            language="TypeScript"
          />
         <GithubCard
            name="serenmodz.rocks"
            description="My very own personal website, made using Next.js, TailwindCSS and TypeScript"
            url="https://github.com/SerenModz21/serenmodz.rocks"
            language="TypeScript"
          />
          <GithubCard
            name="fabric-mod"
            description="A Discord to Minecraft bridge for Kings MC"
            url="https://github.com/Kings-World/fabric-mod"
            language="Java"
          />
          <GithubCard
            name="deck.js"
            description="🛠️ utility bot for the mixtape community server"
            url="https://github.com/mixtape-bot/deck.js"
            language="TypeScript"
            archived
          />
          <GithubCard
            name="rpc"
            description="✨ rep your mixtape appreciation!"
            url="https://github.com/mixtape-bot/rpc"
            language="JavaScript"
            archived
          />
        </div>
      </div>

      {/* referrals */}
      <div className="w-full pl-4 pr-8 sm:px-8 pb-8">
        <h2 id="referrals" className="text-xl font-bold mb-4">Referrals</h2>
        <div className="grid gap-4">
          <Card
            url="https://seren.link/oxide"
            name="Oxide Hosting - affordable and reliable hosting"
            description="We currently provide consumers both reliable and high quality Virtual Servers (VPS), Game Hosting, Website Hosting, Discord Bot Hosting and Domains at affordable prices."
          />
          <Card
            url="https://seren.link/sneak"
            name="Sneak Energy - 5 sachets worth (£/$/€)10 for free"
            description="We're on a mission to inspire you to create. Our sugar-free energy formula is a different kind of energy drink, with natural colours and natural flavours."
          />
          <Card
            url="https://seren.link/digitalocean"
            name="DigitalOcean - $200, 60-day credit for new users"
            description="Helping millions of developers easily build, test, manage, and scale applications of any size – faster than ever before."
          />
          <Card
            url="https://seren.link/dashlane"
            name="Dashlane - claim your 6 months of premium"
            description="Live a safer life online with Dashlane password manager: Store and fill in all your passwords, personal information, and payments."
          />
        </div>
      </div>
    </Layout>
  );
}
