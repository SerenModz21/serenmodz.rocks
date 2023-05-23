import { FaCode, FaGithub, FaTwitter } from "react-icons/fa";
import ExternalLink from "@components/ExternalLink";
import { Link } from "@utils/constants";

export default function Footer() {
    return (
        <footer className="items-center px-4 pb-4 sm:flex sm:flex-row-reverse sm:justify-between sm:p-4">
            <div className="grid-flow-col gap-2 md:place-self-center md:justify-self-end">
                {/* github */}
                <ExternalLink
                    href={Link.GitHub}
                    title="Go to GitHub"
                    className="btn-ghost btn-circle btn"
                >
                    <FaGithub className="h-6 w-6" />
                </ExternalLink>

                {/* twitter */}
                <ExternalLink
                    href={Link.Twitter}
                    title="Go to Twitter"
                    className="btn-ghost btn-circle btn"
                >
                    <FaTwitter className="h-6 w-6" />
                </ExternalLink>

                {/* source */}
                <ExternalLink
                    href={Link.Source}
                    title="View Source"
                    className="btn-ghost btn-circle btn"
                >
                    <FaCode className="h-6 w-6" />
                </ExternalLink>
            </div>
            <div className="items-center pl-2 md:pl-0">
                <span>Copyright © {new Date().getFullYear()} - All right reserved</span>
            </div>
        </footer>
    );
}
