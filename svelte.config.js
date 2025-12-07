import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import adapter from "@sveltejs/adapter-node"
import path from "path"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
        adapter: adapter({
            out: "build",
            precompress: true
        }),
        alias: {
            "@core/components": path.resolve("./src/lib/components"),
            "@core/types": path.resolve("./src/lib/types.ts"),
            "@core/utils": path.resolve("./src/lib/utils.ts"),
            "@core/icons": path.resolve("./src/lib/icons/index.ts"),
            "@core/assets": path.resolve("./src/lib/assets")
        },
        experimental: {
            remoteFunctions: true
        }
    },
    compilerOptions: {
        experimental: {
            async: true
        }
    }
}

export default config
