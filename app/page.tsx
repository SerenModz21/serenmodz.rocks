import NextImage from "next/image";

import GithubCard from "@components/GithubCard";
import Card from "@components/Card";
import logo from "@public/logo.png";

export default function Home() {
    return (
        <>
            {/* logo + content */}
            <section className="align-center flex w-full flex-col justify-center px-4 pb-4 sm:flex-row sm:p-8">
                {/* logo */}
                <div className="mb-2 h-32 w-32 sm:mb-0 sm:h-40 sm:w-40">
                    <NextImage
                        src={logo}
                        alt="logo"
                        height={160}
                        width={160}
                        className="rounded-full"
                        priority
                    />
                </div>
                <div className="flex flex-col sm:pl-8">
                    <h1 className="text-2xl font-bold">Seren_Modz 21</h1>
                    <p className="py-1 pr-2 sm:max-w-md sm:pr-0">
                        Hello! My name is Seren_Modz 21, an inspired back-end
                        developer. I&#39;m from the United Kingdom and I&#39;m a
                        full-time college student. Currently, I mainly work on
                        private projects but I plan to grow and achieve my goal
                        of working on more open source projects.
                    </p>
                </div>
            </section>

            {/* projects */}
            <section
                id="projects"
                className="w-full px-4 pb-8 pt-2 sm:px-8 sm:pt-0"
            >
                <h2 className="mb-4 text-xl font-bold">Projects</h2>
                <div className="grid sm:grid-cols-2 gap-4">
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
                        name="cdn-worker"
                        description="A simple CDN made using Cloudflare Workers and Hono"
                        url="https://github.com/SerenModz21/cdn-worker"
                        language="TypeScript"
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
            </section>

            {/* referrals */}
            <section id="referrals" className="w-full px-4 pb-8 sm:px-8">
                <h2 className="mb-4 text-xl font-bold">Referrals</h2>
                <div className="grid gap-4">
                    <Card
                        url="https://seren.link/oxide"
                        name="Oxide Hosting - affordable and reliable hosting"
                        description="We currently provide consumers both reliable and high quality Virtual Servers (VPS), Game Hosting, Website Hosting, Discord Bot Hosting and Domains at affordable prices."
                    />
                    <Card
                        url="https://seren.link/sneak"
                        name="Sneak Energy - 5 sachets worth £10 for free"
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
            </section>
        </>
    )
}