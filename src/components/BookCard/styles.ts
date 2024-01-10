import Image from "next/image";
import { styled } from "@/lib/stitches";

export const BookCardWrapper = styled("article", {
  display: "flex",
  gap: "$5",
  padding: "$4 $5",
  backgroundColor: "$gray-700",
  borderRadius: "$md",
});

export const BookCardCover = styled(Image, {
  borderRadius: "$xs",

  variants: {
    size: {
      md: {
        height: 94,
        width: 64,
      },
      lg: {
        height: 152,
        width: 108,
      },
    },
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
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
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
