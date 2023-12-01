import { styled } from "@/lib/stitches";

export const LoginWrapper = styled("div", {
  display: "flex",
  height: "100vh",
  padding: "$4",
});

export const LoginHero = styled("div", {
  position: "relative",
  maxWidth: "398px",

  "img:first-child": {
    height: "100%",
    width: "fit-content",
    objectFit: "contain",
    objectPosition: "left",
    borderRadius: "$md",
  },

  "img:last-child": {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "10rem",
  },

  "@media screen and (max-width: 768px)": {
    display: "none",
  },
});

export const LoginAuth = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const LoginAuthWelcome = styled("div", {
  h1: {
    color: "$gray-100",
    fontSize: "$xl",
    fontWeight: "$bold",
    lineHeight: "$short",
  },

  p: {
    color: "$gray-200",
    fontSize: "$sm",
    fontWeight: "$regular",
    lineHeight: "$base",
  },
});

export const LoginAuthOptions = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  marginTop: "$10",
});

export const LoginAuthButton = styled("button", {
  all: "unset",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "$5",
  padding: "$5 $6",
  backgroundColor: "$gray-600",
  color: "$gray-200",
  borderRadius: "$sm",
  fontSize: "$md",
  fontWeight: "bold",
  lineHeight: "$base",
  border: "2px solid transparent",

  "&:hover": {
    backgroundColor: "$gray-500",
  },

  "&:focus": {
    borderColor: "$purple-100",
  },
});
