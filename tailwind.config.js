/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                orangeAccent: '#ff6633',
                yellowAccent: '#ffcc00',
                tealAccent: "#33cccc",
                redSoft: "#ff6666",
                redStrong: "#ff3333",
                orangeSoft: "#ffcc66",
                blueAccent: "#0000ff",
                navyDark: "#003366"
            },
        },
    },
    plugins: [],
}