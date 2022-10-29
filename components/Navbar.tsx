import NextLink from "next/link";
import { useRouter } from "next/router";
import { FaBars, FaTimes, FaCode, FaGithub, FaTwitter } from "react-icons/fa";
import ExternalLink from "@components/ExternalLink";
import { LinkProps } from "@utils/types";
import { Link } from "@utils/constants";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <div className="w-full h-16 navbar justify-between">
      {/* nav menu */}
      <nav className="align-center text-lg flex">
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

      {/* theme toggle */}
      <ThemeToggle />
    </div>
  );
}

export function NavLink(props: LinkProps) {
  const router = useRouter();
  const isActive = router.asPath === props.href;

  return (
    <NextLink
      className={isActive ? "font-medium" : ""}
      {...props}
    />
  );
}
