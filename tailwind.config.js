/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                orangeAccent: '#ff6633',// orange-500
                yellowAccent: '#ffcc00',// yellow-400
                tealAccent: "#33cccc",// teal-500
                redSoft: "#ff6666", //red-300
                redStrong: "#ff3333", //red-500
                orangeSoft: "#ffcc66",// orange-300
                blueAccent: "#0000ff",// blue-500
                navyDark: "#003366",// navy-800
                navyBlue: '#1e3a8a',//blue-900
                slateGray: '#718096', //gray-600
                violetCustom: '#805ad5', //purple-600
                greenSoft: '#4ADE80', //green-400
                coolGray: '#4b5563', //gray-800
                myGreen: '#38a169', //green-600
                darkGreen: '#166534', //green-800
            },
        },
    },
    plugins: [],
}