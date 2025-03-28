import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            backgroundImage: {
                "main-gradient":
                    "linear-gradient(to right, var(--color-light-cobalt-blue), var(--color-light-apricot))",
            },
        },
    },
    plugins: [require("tailwindcss-displaymodes")],
} satisfies Config;
