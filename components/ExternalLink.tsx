import Link from "next/link";
import type { PropsWithChildren } from "react";
import type { LinkProps } from "@utils/types";

export default function ExternalLink(props: PropsWithChildren<LinkProps>) {
    return (
        <Link target="_blank" rel="noopener noreferrer" {...props}>
            {props.children}
        </Link>
    );
}