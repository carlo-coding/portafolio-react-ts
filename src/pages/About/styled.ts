import { SxProps } from "@mui/material";

export const styles_about: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  color: "var(--clr-clear)",
  minHeight: "inherit",
  paddingTop: "20px",

  " p": {
    lineHeight: "2em",
  },

  " .regular-title": {
    margin: "6rem 0 2rem",
    color: "var(--clr-clear)",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
};
