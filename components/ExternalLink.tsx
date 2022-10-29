import type { AnchorHTMLAttributes, RefAttributes } from "react"
import Link, { LinkProps } from "next/link";

export default function ExternalLink(props: ExternalLinkProps) {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {props.children}
    </Link>
  );
}

export type ExternalLinkProps = 
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>
  & LinkProps
  & RefAttributes<HTMLAnchorElement>;