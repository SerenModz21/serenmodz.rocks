// credits: https://github.com/acollierr17/acollier.dev/blob/main/lib/spotify.ts
import qs from "node:querystring";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

enum Endpoints {
  TOKEN = "https://accounts.spotify.com/api/token",
  TOP_TRACKS = "https://api.spotify.com/v1/me/top/tracks",
  NOW_PLAYING = "https://api.spotify.com/v1/me/player/currently-playing",
}

const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

const getAccessToken = async () => {
  const response = await fetch(Endpoints.TOKEN, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: qs.stringify({
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN,
    }),
  });

  return response.json();
};

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();

  return fetch(Endpoints.TOP_TRACKS, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(Endpoints.NOW_PLAYING, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
