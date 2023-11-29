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
  },
});