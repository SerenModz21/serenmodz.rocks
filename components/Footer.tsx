import { FaCode, FaGithub, FaTwitter } from "react-icons/fa";
import ExternalLink from "@components/ExternalLink";
import { Link } from "@utils/constants";

export default function Footer() {
  return (
    <footer className="items-center px-4 pb-4 sm:p-4 sm:flex sm:flex-row-reverse sm:justify-between">
      <div className="grid-flow-col gap-2 md:place-self-center md:justify-self-end">
        {/* github */}
        <ExternalLink href={Link.GitHub} title="Go to GitHub" className="btn btn-ghost btn-circle">
          <FaGithub className="link-button h-6 w-6" />
        </ExternalLink>

        {/* twitter */}
        <ExternalLink href={Link.Twitter} title="Go to Twitter" className="btn btn-ghost btn-circle">
          <FaTwitter className="link-button h-6 w-6" />
        </ExternalLink>

        {/* source */}
        <ExternalLink href={Link.Source} title="View Source" className="btn btn-ghost btn-circle">
          <FaCode className="link-button h-6 w-6" />
        </ExternalLink>
      </div>
      <div className="items-center pl-2 sm:pl-0">
        <span>Copyright © 2022 - All right reserved</span>
      </div>
  </footer>
  )
}