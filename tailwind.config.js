/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctortheme: {
        
            primary: "#ff9ff3",
                    
            secondary: "#48dbfb",
                    
            accent: "#576574",
                    
            neutral: "#222f3e",
                    
            "base-100": "#FFFFFF"
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
