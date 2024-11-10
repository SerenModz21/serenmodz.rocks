import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button, type ButtonProps } from "./ui/button";

export function ThemeToggle(props: Omit<ButtonProps, "onClick" | "title">) {
    const [theme, setThemeState] = useState<"dark" | "light" | "system">(
        "system",
    );

    useEffect(() => {
        const isDarkMode = document.documentElement.classList.contains("dark");
        setThemeState(isDarkMode ? "dark" : "light");
    }, []);

    useEffect(() => {
        const isDark =
            theme === "dark" ||
            (theme === "system" &&
                window.matchMedia("(prefers-color-scheme: dark)").matches);
        document.documentElement.classList[isDark ? "add" : "remove"]("dark");
    }, [theme]);

    return (
        <Button
            {...props}
            onClick={() =>
                setThemeState((prev) => (prev === "dark" ? "light" : "dark"))
            }
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
            <Sun className="hidden dark:block" />
            <Moon className="dark:hidden" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
