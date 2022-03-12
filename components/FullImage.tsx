import NextImage, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "layout" | "objectFit">;

export default function FullImage(props: Props) {
  return <NextImage layout="fill" objectFit="cover" {...props} />;
}
