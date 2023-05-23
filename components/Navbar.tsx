import NextLink from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    return (
        <div className="navbar h-16 w-full justify-between">
            {/* nav menu */}
            <nav className="align-center flex text-lg">
                <ul className="menu menu-horizontal">
                    <li>
                        <NextLink href="/">Home</NextLink>
                    </li>
                    <li>
                        <NextLink href="/#projects">Projects</NextLink>
                    </li>
                    <li>
                        <NextLink href="/#referrals">Referrals</NextLink>
                    </li>
                </ul>
            </nav>

            {/* theme toggle */}
            <ThemeToggle />
        </div>
    );
}

