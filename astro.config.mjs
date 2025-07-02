import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://yayaastro.netlify.app/',
    base: "/docs",
    trailingSlash: "always",
});
