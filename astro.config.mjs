import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://lighthearted-sopapillas-24f39e.netlify.app/",
	integrations: [sitemap()],
});
