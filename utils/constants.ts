export enum Link {
    GitHub = "https://github.com/SerenModz21",
    Twitter = "https://twitter.com/SerenModz21",
    Source = "https://github.com/SerenModz21/serenmodz.rocks",
}

export const url = process.env.NEXT_PUBLIC_VERCEL_URL
    ? "https://www.serenmodz.rocks"
    : "http://localhost:3000";

export const title = "Seren_Modz 21";

// TODO: make a better description
export const description = "Welcome to my website! My name is Seren_Modz 21.";