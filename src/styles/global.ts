import { globalCss } from "@/lib/stitches";

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },

  body: {
    "-webkit-font-smoothing": "antialiased",
    backgroundColor: "$gray-800",
    color: "$gray-100",

    "::-webkit-scrollbar": {
      width: "$space$1",
    },

    "::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 $space$1 $colors$gray-700",
    },

    "::-webkit-scrollbar-thumb": {
      backgroundColor: "$gray-600",
    },
  },

  "@media screen and (max-width: 1366px)": {
    fontSize: "94%",
  },
});
