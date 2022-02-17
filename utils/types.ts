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
