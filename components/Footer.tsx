import { NowPlaying } from "@components/NowPlaying";

export default function Footer() {
  return (
    <div className="mx-auto flex h-[5vh] w-full max-w-2xl items-center justify-start sm:justify-center">
      <NowPlaying />
    </div>
  );
}
