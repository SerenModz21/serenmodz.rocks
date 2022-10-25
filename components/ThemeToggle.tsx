import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const text = mounted
    ? (resolvedTheme === "dark" ? "Light" : "Dark")
    : "";

  // we only get access to theme after being mounted (credits to Lee Robinson for this)
  // https://github.com/leerob/leerob.io/blob/main/components/Container.tsx#L35
  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      aria-label={`Switch to ${text} mode`}
      title={`Switch to ${text} mode`}
      className="btn btn-ghost btn-circle"
      onClick={() => setTheme(text.toLowerCase())}
    >
      {mounted && (
        resolvedTheme === "dark"
          ? (<FaSun className="h-6 w-6" />)
          : (<FaMoon className="h-6 w-6" />)
      )}
    </button>
  );
}