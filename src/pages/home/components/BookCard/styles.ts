import { styled } from "@/lib/stitches";

export const BookCardWrapper = styled("article", {
  display: "flex",
  alignItems: "center",
  gap: "$5",
  padding: "$4 $5",
  backgroundColor: "$gray-700",
  borderRadius: "$md",

  img: {
    borderRadius: "$xs",
  },
});

export const BookCardDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
});

export const BookCardTitle = styled("div", {
  display: "flex",
  flexDirection: "column",

  strong: {
    color: "$gray-100",
    fontSize: "$sm",
    fontWeight: "$bold",
    lineHeight: "$short",
  },

  span: {
    color: "$gray-400",
    fontSize: "$xs",
    fontWeight: "$regular",
    lineHeight: "$base",
  },
});

export const BookCardRating = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$1",

  svg: {
    fill: "$purple-100",
  },
});
