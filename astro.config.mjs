import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.SITE_URL ?? "https://yashaswi-portfolio.f9kwp94rt9.workers.dev",
  output: "static",
  build: {
    format: "directory",
  },
});
