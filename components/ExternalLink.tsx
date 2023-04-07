import Link from "next/link";
import { LinkProps } from "@utils/types";

export default function ExternalLink(props: LinkProps) {
    return (
        <Link target="_blank" rel="noopener noreferrer" {...props}>
            {props.children}
        </Link>
    );
}
