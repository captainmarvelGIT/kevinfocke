import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import compressor from "astro-compressor";
import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
	site: "https://kevinfocke.com",
	prefetch: {
		defaultStrategy: "hover",
		prefetchAll: false,
	},
	legacy: {
		collections: true,
	},
	integrations: [
		sitemap(),
		robotsTxt(),
		playformCompress({
			CSS: true,
			HTML: true,
			Image: false,
			JavaScript: true,
			JSON: true,
			SVG: true,
		}),
		compressor({ gzip: { level: 9 }, zstd: true, brotli: true }),
	],
	redirects: {
		"/coding": "https://github.com/KevinFocke",
		"/feed": "/rss.xml",
		"/rss": "/rss.xml",
		"/projects/outlandish-curiosity/":
			"/projects/wildly-creative-books/outlandish-curiosity/",
		"/projects/the-outer-reach/":
			"/projects/wildly-creative-books/essentialized/",
		"/projects/the-reflection-collection/":
			"/projects/wildly-creative-books/the-reflection-collection/",
		"/the-code-monster-manual-vol-0-preview.pdf":
			"/The-Code-Monster-Manual-Vol-0-Sample.pdf",
		"/the-code-monster-manual-vol-0_preview.pdf":
			"/The-Code-Monster-Manual-Vol-0-Sample.pdf",
		"/the-code-monster-manual-vol-1-preview.pdf":
			"/The-Code-Monster-Manual-Vol-1-Sample.pdf",
		"/motivation-when-shi-hits-the-fan-preview.pdf":
			"/Motivation-When-Shi-Hits-The-Fan-Sample.pdf",
		"/essentialized-preview.pdf": "/Essentialized-Sample.pdf",
		"/the-reflection-collection-preview.pdf":
			"/The-Reflection-Collection-Sample.pdf",
	},
	trailingSlash: "ignore",
});