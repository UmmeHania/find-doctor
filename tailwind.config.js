module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {



          "primary": "#0FCFEC",



          "secondary": "#19D3AE",



          "accent": "#3A4256",



          "neutral": "#F3F4F6",



          "base-100": "#FFFFFF",



          "info": "#98A8DD",



          "success": "#1BBB70",



          "warning": "#F59E0B",



          "error": "#FB7185",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
