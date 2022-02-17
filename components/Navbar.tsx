import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="w-2xl mx-auto flex h-[5vh] max-w-2xl items-center justify-between px-5 shadow-lg">
      <div className="space-x-5">
        <a>Home</a>
        {/*<a>Projects</a>*/}
        {/*<a>About</a>*/}
      </div>
      <button
        type="button"
        aria-label={`Toggle ${
          resolvedTheme === "dark" ? "Dark" : "Light"
        } Mode`}
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {resolvedTheme === "dark" ? (
          <FaSun className="h-6 w-6" />
        ) : (
          <FaMoon className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}
