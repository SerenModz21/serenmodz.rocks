import NextLink from "next/link";
import { useRouter } from "next/router";
import { FaSun, FaMoon, FaBars, FaTimes, FaCode, FaGithub, FaTwitter } from "react-icons/fa";
import ExternalLink from "@components/ExternalLink";
import { AnchorTag } from "@utils/types";
import { Link } from "@utils/constants";

export default function Navbar() {
  return (
    <div className="w-full h-16 navbar justify-between">
      {/* nav menu */}
      <nav className="align-center text-lg hidden sm:flex">
        <ul className="menu menu-horizontal">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/#projects">Projects</NavLink>
          </li>
          <li>
            <NavLink href="/#referrals">Referrals</NavLink>
          </li>
        </ul>
      </nav>

      {/* hamburger menu */}
      <label htmlFor="nav-menu" className="swap-rotate btn swap btn-ghost btn-circle sm:hidden">
        <input type="checkbox" />
        <FaTimes className="swap-on h-5 w-5" />
        <FaBars className="swap-off h-5 w-5" />
      </label>

      {/* links */}
      <div className="flex-none grid grid-flow-col align-center pr-4 sm:pr-0">
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

        {/* theme toggle */}
        <label className="btn swap btn-ghost btn-circle">
          <input type="checkbox" />
          <FaSun data-set-theme="light" title="Switch to light mode" className="h-6 w-6 swap-on" />
          <FaMoon data-set-theme="dark" title="Switch to dark mode" className="h-6 w-6 swap-off" />
        </label>
      </div>
    </div>
  );
}

export function NavLink(props: AnchorTag<true>) {
  return (
    <NextLink href={props.href} passHref>
      {useRouter().asPath === props.href ? (
        <a className="font-medium" {...props} />
      ) : (
        <a {...props} />
      )}
    </NextLink>
  );
}
