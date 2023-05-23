"use client";

import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaSpinner } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    const text = mounted ? (resolvedTheme === "dark" ? "Light" : "Dark") : "";

    // we only get access to theme after being mounted (credits to Lee Robinson for this)
    // https://github.com/leerob/leerob.io/blob/main/components/Container.tsx#L35
    useEffect(() => setMounted(true), []);

    return (
        <button
            type="button"
            aria-label={mounted ? `Switch to ${text} mode` : "Loading..."}
            title={mounted ? `Switch to ${text} mode` : "Loading..."}
            className="btn-ghost btn-circle btn"
            onClick={() => setTheme(text.toLowerCase())}
        >
            {mounted ? (
                resolvedTheme === "dark" ? (
                    <FaSun className="h-6 w-6" />
                ) : (
                    <FaMoon className="h-6 w-6" />
                )
            ) : (
                <FaSpinner className="h-6 w-6 animate-spin" />
            )}
        </button>
    );
}
