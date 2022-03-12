import NextLink from "next/link";
import { pages } from "@utils/constants";
import ThemeToggle from "@components/ThemeToggle";

export default function Navbar() {
  return (
    <div className="inline-flex h-20 w-full items-center justify-between px-4">
      <nav className="space-x-2">
        {pages.map(({ href, name }) => (
          <NextLink href={href} key={href}>
            {name}
          </NextLink>
        ))}
      </nav>
      <ThemeToggle />
    </div>
  );
}
