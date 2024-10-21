import { resolve } from "path";

import react from "@vitejs/plugin-react-swc";
import Unfonts from "unplugin-fonts/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        Unfonts({
            fontsource: {
                families: [
                    {
                        name: "Geist Sans",
                        weights: [400, 500, 600, 700],
                    },
                ],
            },
            // google: {
            //     families: [
            //         {
            //             name: "Inter",
            //             styles: "wght@400;500;600;700",
            //         },
            //     ],
            // },
        }),
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
        },
    },
});
