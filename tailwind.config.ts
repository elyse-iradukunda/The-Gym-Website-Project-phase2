import type { Config } from "tailwindcss";

const config: Config = {
  content: [
  "./**/*.{html,js,ts,jsx,tsx,vue,php,blade,twig}",
  "./src/**/*.{html,js,ts,jsx,tsx,vue}",
  "./src/tailwind-safelist.css",
],
  theme: {
    extend: {
      scale: {
        250: "2.5",
        230: "2.3",
        220: "2.2",
        210: "2.1",
        200: "2.0",
        180: "1.8",
        120: "1.2",
        110: "1.1"
      },
      rotate: {
        "-3": "-3deg",
        0: "0deg",
        1: "1deg",
        2: "2deg",
        3: "3deg",
        8: "8deg",
        28: "28deg"
      },
      width: {
        70: "17.5rem",
        66: "16.5rem",
        65: "16.25rem",
        60: "15rem",
        56: "14rem",
        55: "13.75rem",
        48: "12rem"
      },
      height: {
        100: "25rem",
        80: "20rem",
        78: "19.5rem",
        66: "16.5rem",
        60: "15rem",
        56: "14rem",
        55: "13.75rem",
        50: "12.5rem",
        40: "10rem"
      },
      spacing: {
        "-48": "-12rem",
        "-62": "-15.5rem",
        "-68": "-17rem",
        "-25": "-6.25rem",
        15: "3.75rem",
        20: "5rem",
        23: "5.75rem",
        25: "6.25rem",
        32.5: "8.125rem",
        33: "8.25rem",
        34: "8.5rem",
        35: "8.75rem",
        40: "10rem",
        42: "10.5rem",
        45: "11.25rem",
        110: "27.5rem"
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        9999: "9999"
      },
      clipPath: {
        "shape-1": "polygon(50% 2%,60% 1%,95% 62%,70% 84%,32% 19%)",
        "shape-2": "polygon(33% 4%,75% 0%,83% 30%,33% 100%,2% 100%,4% 71%)",
        "shape-3": "polygon(4% 36%, 61% 30%, 100% 65%, 87% 100%, 33% 98%, 0 64%)",
        "shape-4": "polygon(8% 15%,48% 21%,66% 77%,56% 100%,25% 100%,0 55%)",
        "shape-5": "polygon(79% 4%, 100% 25%, 100% 100%, 73% 100%, 42% 84%, 35% 48%, 49% 17%)",
        "shape-6": "polygon(86% 7%,99% 47%,78% 100%,47% 100%,0 64%,42% 14%,54% 10%)"
      }
    }
  },
  plugins: []
};

export default config;
