import { SxProps } from "@mui/material";

export const styles_layout: SxProps = {
  display: "flex",
  height: "auto",
  minHeight: "100vh",
  width: "100%",
  backgroundColor: "var(--clr-sec)",
  flexDirection: "column",
  padding: "0 6%",
  paddingTop: "var(--header-height)",

  " .bottom-border:hover::after": {
    transform: "scaleX(1)",
    transformOrigin: "left",
  },

  " .bottom-border::after": {
    content: `""`,
    position: "absolute",
    left: "0",
    bottom: "-2px",
    width: "100%",
    height: "2px",
    transformOrigin: "right",
    transition: "transform 0.5s",
    backgroundColor: "var(--clr-candy-pink)",
    transform: "scaleX(0)",
  },

  " .cards": {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: "5%",
  },

  " .regular-title": {
    margin: "6rem 0 2rem",
    color: "var(--clr-clear)",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },

  "header + *": {
    minHeight: "inherit",
  },
};
