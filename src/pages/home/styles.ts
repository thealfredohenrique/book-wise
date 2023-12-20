import { styled } from "@/lib/stitches";

export const HomeWrapper = styled("div", {
  padding: "$13 $24 0",
});

export const HomeMain = styled("main", {
  display: "flex",
  flexDirection: "column",
  gap: "$10",
  height: "100%",
});

export const HomeTitle = styled("header", {
  display: "flex",
  gap: "$3",

  svg: {
    fill: "$green-100",
  },

  h1: {
    color: "$gray-100",
    fontSize: "$xl",
    fontWeight: "$bold",
    lineHeight: "$short",
  },
});

export const HomeContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  overflowY: "auto",

  p: {
    color: "$gray-100",
    fontSize: "$xs",
    fontWeight: "$regular",
    lineHeight: "$base",
  },
});

export const HomeAside = styled("aside", {});
