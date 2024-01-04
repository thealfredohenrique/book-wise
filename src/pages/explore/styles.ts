import { styled } from "@/lib/stitches";

export const ExploreWrapper = styled("div", {
  flex: 1,
  padding: "$10 $10 0",
});

export const ExploreHeader = styled("header", {
  display: "flex",
  justifyContent: "space-between",
});

export const ExploreTitle = styled("div", {
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

export const ExploreSearch = styled("div", {
  display: "flex",
  padding: "$3 $5",
  gap: "$2",
  backgroundColor: "$gray-800",
  border: "1px solid $gray-500",
  borderRadius: "$xs",
  caretColor: "$green-200",

  input: {
    all: "unset",
    width: "25rem",
    color: "$gray-200",
    fontSize: "$xs",
  },

  svg: {
    fill: "$gray-500",
  },

  "&:focus-within": {
    borderColor: "$green-200",

    svg: {
      fill: "$green-200",
    },
  },

  "&::placeholder": {
    color: "$gray-400",
  },
});
