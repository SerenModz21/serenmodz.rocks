import { url } from "@utils/constants";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/"
        },
        sitemap: `${url}/sitemap.xml`,
        host: url
    };
}