/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => [
    redirect("/github/:path*", "https://github.com/SerenModz21/:path*"),
    redirect("/twitter", "https://twitter.com/SerenModz21"),
  ],
};

const redirect = (source, destination, permanent = true) => {
  return { source, destination, permanent };
};

module.exports = nextConfig;
