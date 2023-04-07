import NextLink from "next/link";
import { useRouter } from "next/router";
import { LinkProps } from "@utils/types";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    return (
        <div className="navbar h-16 w-full justify-between">
            {/* nav menu */}
            <nav className="align-center flex text-lg">
                <ul className="menu menu-horizontal">
                    <li>
                        <NavLink href="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink href="/#projects">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink href="/#referrals">Referrals</NavLink>
                    </li>
                </ul>
            </nav>

            {/* theme toggle */}
            <ThemeToggle />
        </div>
    );
}

export function NavLink(props: LinkProps) {
    const router = useRouter();
    const isActive = router.asPath === props.href;

    return <NextLink className={isActive ? "font-medium" : ""} {...props} />;
}
