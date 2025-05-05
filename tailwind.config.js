/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#2e6ea2",
                "primary-dark": "#284577",
                secondary: "#73bf44",
                bg: "#f5f5f5",
            },
            screens: {
                // Don't need xs since Tailwind uses min-width approach
                // to its media queries.
                sm: "576px",
                md: "768px",
                lg: "992px",
                xl: "1200px",
                xxl: "1400px",
            },
        },
    },
    plugins: [],
};
