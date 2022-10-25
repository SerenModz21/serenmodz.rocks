import type { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

// credits: https://github.com/acollierr17/acollier.dev/blob/main/lib/types.ts
export interface Song {
  title: string;
  slug: string;
  content: string;
  release: string;
  author: string;
  description?: string;
  descriptionHtml?: string;
}

export interface SpotifySong {
  songUrl: string;
  artist: string;
  title: string;
  albumImageUrl: string;
}

export interface NowPlayingSong {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
}

export interface TopTracks {
  tracks: SpotifySong[];
}

type Anchor = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export type AnchorTag<T extends boolean = false> = T extends true ? Anchor & { href: string } : Anchor;