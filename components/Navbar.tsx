import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const text = mounted && (resolvedTheme === "dark" ? "Light" : "Dark");

  useEffect(() => setMounted(true), []);

  return (
    <div className="mx-auto flex h-[5vh] max-w-full items-center justify-between px-5 shadow-lg sm:max-w-2xl">
      <div className="space-x-5">
        <a href="#">Home</a>
        {/*<a>Projects</a>*/}
        {/*<a>About</a>*/}
      </div>
      <button
        type="button"
        aria-label={`Switch to ${text} mode`}
        title={`Switch to ${text} mode`}
        onClick={() => setTheme(String(text).toLowerCase())}
      >
        {mounted &&
          (resolvedTheme === "dark" ? (
            <FaSun className="h-6 w-6" />
          ) : (
            <FaMoon className="h-6 w-6" />
          ))}
      </button>
    </div>
  );
}
