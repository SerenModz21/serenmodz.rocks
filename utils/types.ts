import type { AnchorHTMLAttributes, RefAttributes } from "react";
import type { LinkProps as NextLinkProps } from "next/link";

export type LinkProps = Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof NextLinkProps
> &
    NextLinkProps &
    RefAttributes<HTMLAnchorElement>;
