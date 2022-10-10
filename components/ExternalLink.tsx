import Link from "next/link";
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

export default function ExternalLink(props: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) {
  return props.href ? (
    <Link href={props.href} passHref>
      <a target="_blank" rel="noopener noreferrer" {...props} />
    </Link>
  ) : (
    <a target="_blank" rel="noopener noreferrer" {...props} />
  );
}
