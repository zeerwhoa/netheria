module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        sidebar: "6px 0px 18px rgba(0, 0, 0, 0.06)",
        e5: "0px 2px 8px rgba(46, 50, 56, 0.04), 0px 8px 24px rgba(46, 50, 56, 0.08)",
      },
      colors: {
        grey: {
          50: "#FAFAFA",
          200: "#D0D1D2",
          300: "#ADAFB3",
          400: "#91969C",
          500: "#7B818A",
          600: "#555B62",
          900: "#111827",
        },
        primary: {
          500: "#0180FF",
          600: "#0063D5",
        },
        success: {
          500: "#4DB296",
        },
      },
      fontSize: {
        "2sm": [
          "16px",
          {
            lineHeight: "20px",
          },
        ],
        "2xs": [
          "10px",
          {
            lineHeight: "12px",
          },
        ],
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
