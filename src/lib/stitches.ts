import { createStitches } from "@stitches/react";

export const { getCssText, globalCss, styled } = createStitches({
  theme: {
    fonts: {
      default: "Nunito, sans-serif",
    },
    space: {
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
    },
    fontSizes: {
      xs: "0.875rem",
      sm: "1rem",
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
    },
    fontWeights: {
      regular: "400",
      bold: "700",
    },
    lineHeights: {
      short: "140%",
      base: "160%",
    },
    colors: {
      "green-100": "#50B2C0",
      "green-200": "#255D6A",
      "green-300": "#0A313C",
      "purple-100": "#8381D9",
      "purple-200": "#2A2879",
      "gray-100": "#F8F9FC",
      "gray-200": "#E6E8F2",
      "gray-300": "#D1D6E4",
      "gray-400": "#8D95AF",
      "gray-500": "#303F73",
      "gray-600": "#252D4A",
      "gray-700": "#181C2A",
      "gray-800": "#0E1116",
      "gradient-horizontal": "linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)",
      "gradient-vertical": "linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)",
    },
  },
});
