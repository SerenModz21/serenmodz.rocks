import { AnchorTag } from "@utils/types";
import Link from "next/link";

export default function ExternalLink(props: AnchorTag) {
  return props.href ? (
    <Link href={props.href} passHref>
      <a target="_blank" rel="noopener noreferrer" {...props} />
    </Link>
  ) : (
    <a target="_blank" rel="noopener noreferrer" {...props} />
  );
}
