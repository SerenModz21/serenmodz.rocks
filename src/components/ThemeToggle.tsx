import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils";
import { Button, type ButtonProps } from "./ui/button";

export function ThemeToggle(props: {
    buttonClass?: string;
    buttonVaiant?: ButtonProps["variant"];
    iconClass: string;
}) {
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
            variant={props.buttonVaiant ?? "secondary"}
            className={props.buttonClass}
            onClick={() => setThemeState(theme === "dark" ? "light" : "dark")}
            title="Toggle theme"
        >
            <Sun
                className={cn(
                    "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
                    props.iconClass,
                )}
            />
            <Moon
                className={cn(
                    "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
                    props.iconClass,
                )}
            />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
