import { styled } from "@/lib/stitches";

export const NavbarEllipse = styled("div", {
  position: "absolute",
  borderRadius: "$full",
  opacity: "0.8",

  variants: {
    color: {
      green: {
        backgroundColor: "$green-200",
      },
      purple: {
        backgroundColor: "$purple-200",
      },
    },
    size: {
      sm: {
        height: 200,
        width: 200,
        filter: "blur(76px)",
      },
      lg: {
        height: 276,
        width: 276,
        filter: "blur(200px)",
      },
    },
  },
});

export const NavbarWrapper = styled("nav", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "$10",
  padding: "$10 0",
  height: "100%",
  minWidth: 232,
  borderRadius: "$xl",
  overflow: "hidden",
  position: "relative",

  [`*:not(${NavbarEllipse})`]: {
    zIndex: 1,
  },
});

export const NavbarMenu = styled("ul", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

export const NavbarMenuItem = styled("li", {
  listStyle: "none",
  position: "relative",

  a: {
    display: "flex",
    alignItems: "center",
    gap: "$3",
    lineHeight: "$base",
    textDecoration: "none",
  },

  "&:hover": {
    svg: {
      fill: "$gray-100",
    },
    a: {
      color: "$gray-100",
    },
  },

  variants: {
    isSelected: {
      true: {
        svg: {
          fill: "$gray-100",
        },
        a: {
          color: "$gray-100",
          fontWeight: "$bold",
        },
        "&::before": {
          content: "",
          position: "absolute",
          zIndex: 1,
          left: -20,
          height: "$space$6",
          width: "$space$1",
          backgroundImage: "$gradient-vertical",
          borderRadius: "$xs",
        },
      },
      false: {
        svg: {
          fill: "$gray-400",
        },
        a: {
          color: "$gray-400",
          fontWeight: "$regular",
        },
      },
    },
  },
});

export const NavbarFooter = styled("footer", {
  marginTop: "auto",

  a: {
    display: "flex",
    alignItems: "center",
    gap: "$3",
    color: "$gray-200",
    fontWeight: "$bold",
    lineHeight: "$base",
    textDecoration: "none",
  },

  svg: {
    fill: "$green-100",
  },

  "&:hover": {
    a: {
      textDecoration: "underline",
    },
  },
});
