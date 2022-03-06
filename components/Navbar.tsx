import { useTheme } from "next-themes";
import { FaMoon, FaQuestion, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";
import NextLink from "next/link";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const text = mounted ? (resolvedTheme === "dark" ? "Light" : "Dark") : "";

  // we only get access to theme after being mounted (credits to Lee Robinson for this)
  // https://github.com/leerob/leerob.io/blob/main/components/Container.tsx#L35
  useEffect(() => setMounted(true), []);

  return (
    <div className="h-20 w-full">
      <div className="inline-flex h-full w-full items-center justify-between p-4">
        <nav className="">
          <NextLink href="/">Home</NextLink>
        </nav>
        <button
          type="button"
          aria-label={`Switch to ${text} mode`}
          title={`Switch to ${text} mode`}
          onClick={() => setTheme(text.toLowerCase())}
        >
          {!mounted ? (
            <FaQuestion className="h-6 w-6" />
          ) : resolvedTheme === "dark" ? (
            <FaSun className="h-6 w-6" />
          ) : (
            <FaMoon className="h-6 w-6" />
          )}
        </button>
      </div>
    </div>
  );
}
