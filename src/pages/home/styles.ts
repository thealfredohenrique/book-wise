import { styled } from "@/lib/stitches";

export const HomeWrapper = styled("div", {
  display: "flex",
  gap: "$3",
  padding: "0 $5",
  margin: "0 auto",
});

export const HomeMain = styled("main", {
  display: "flex",
  flexDirection: "column",
  gap: "$10",
  flex: 1,
  padding: "$10 $5 0",
  overflowY: "auto",
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
  gap: "$3",

  p: {
    color: "$gray-100",
    fontSize: "$xs",
    fontWeight: "$regular",
    lineHeight: "$base",
    marginBottom: "$1",
  },
});

export const HomeAside = styled("aside", {
  display: "flex",
  flexDirection: "column",
  gap: "$3",
  padding: "$10 $5 0",
  overflowY: "auto",
});

export const HomeAsideHeader = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "$1",

  p: {
    color: "$gray-100",
    fontSize: "$xs",
    fontWeight: "$regular",
    lineHeight: "$base",
  },

  a: {
    display: "flex",
    alignItems: "center",
    gap: "$2",
    padding: "$1 $2",
    textDecoration: "none",
    color: "$purple-100",
    fontSize: "$xs",
    fontWeight: "$bold",
    lineHeight: "$base",

    "&:hover": {
      textDecoration: "underline",
    },
  },
});
