import { url } from "@utils/constants";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return ["", "/#projects", "/#referrals"].map((path) => ({
        url: url + path,
        lastModified: new Date()
    }));
}