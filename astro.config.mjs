import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const base = process.env.GITHUB_ACTIONS && repo ? `/${repo}/` : "/";

export default defineConfig({
  output: "static",
  site: "https://sophialilithlima-crypto.github.io/Portifolio/",
  base,
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
});