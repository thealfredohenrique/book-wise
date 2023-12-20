import { styled } from "@/lib/stitches";

export const ArticleWrapper = styled("article", {
  display: "flex",
  flexDirection: "column",
  gap: "$8",
  padding: "$6",
  backgroundColor: "$gray-700",
  borderRadius: "$md",
});

export const ArticleHeader = styled("header", {
  display: "flex",
  alignItems: "flex-start",
  gap: "$4",
});

export const ArticleAvatar = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 42,
  height: 42,
  background: "$gradient-vertical",
  borderRadius: "$full",

  img: {
    borderRadius: "$full",
  },
});

export const ArticleInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  flex: 1,

  strong: {
    color: "$gray-100",
    fontSize: "$sm",
    fontWeight: "$regular",
    lineHeight: "$base",
  },

  span: {
    color: "$gray-400",
    fontSize: "$xs",
    fontWeight: "$regular",
    lineHeight: "$base",
  },
});

export const ArticleRating = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$1",

  svg: {
    fill: "$purple-100",
  },
});

export const ArticleContent = styled("div", {
  display: "flex",
  gap: "$5",
});

export const ArticleContentData = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$5",
});

export const ArticleContentHeader = styled("div", {
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

export const ArticleContentDescription = styled("p", {
  color: "$gray-300",
  fontSize: "$xs",
  fontWeight: "$regular",
  lineHeight: "$base",
});
