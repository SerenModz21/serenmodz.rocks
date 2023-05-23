/**
 * @type {import("tailwindcss").Config}
 */
module.exports = {
    content: ["./pages/**/*.tsx", "./components/**/*.tsx", "./app/**/*.tsx"],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: ["light", "dark"],
    },
    plugins: [require("daisyui")],
};
