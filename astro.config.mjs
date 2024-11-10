import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://www.serenmodz.rocks",
    prefetch: { prefetchAll: true },
    integrations: [
        react(),
        tailwind({ applyBaseStyles: false }),
        sitemap({ lastmod: new Date() }),
    ],
});
