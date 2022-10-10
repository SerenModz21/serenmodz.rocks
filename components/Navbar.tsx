import NextLink from "next/link";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <NextLink href="/" passHref>
          <a className="btn btn-ghost text-xl normal-case">Seren_Modz 21</a>
        </NextLink>
      </div>
      {/* TODO: put nav links in a better place */}
      <div className="align-center breadcrumbs hidden text-lg sm:block">
        <ul>
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/projects">Projects</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-none">
        {/* theme toggle TODO: add theme toggle functionality, either with next-theme or theme-change */}
        {/*<button className="btn btn-circle btn-ghost">*/}
        <label className="swap-rotate btn swap btn-ghost btn-circle">
          <input type="checkbox" />
          <FaSun className="swap-on h-5 w-5" title="Switch to light mode" />
          <FaMoon className="swap-off h-5 w-5" title="Switch to dark mode" />
        </label>
        {/*</button>*/}

        {/* hamburger menu TODO: add hamburger menu functionality */}
        {/*<button className="btn btn-circle btn-ghost">*/}
        <label className="swap-rotate btn swap btn-ghost btn-circle lg:hidden">
          <input type="checkbox" />
          <FaTimes className="swap-on h-5 w-5" />
          <FaBars className="swap-off h-5 w-5" />
        </label>
        {/*</button>*/}
      </div>
    </div>
  );
}

function NavLink(props: { children: string; href: string }) {
  return (
    <NextLink href={props.href} passHref>
      {useRouter().asPath === props.href ? (
        <a className="font-medium">{props.children}</a>
      ) : (
        <a>{props.children}</a>
      )}
    </NextLink>
  );
}
