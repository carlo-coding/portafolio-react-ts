import { SxProps } from "@mui/material";

export const styles_header: SxProps = {
  display: "flex",
  minHeight: "var(--header-height)",
  alignItems: "center",
  width: "100%",
  position: "fixed",
  backgroundColor: "var(--clr-sec2)",
  color: "var(--clr-clear)",
  top: "0",
  left: "0",
  zIndex: "3000",

  ".main-link": {
    marginLeft: "25px",
  },

  ".responsive_menu > *": {
    width: "100%",
    height: "100%",
  },

  ".responsive_menu": {
    border: "0",
    background: "var(--clr-sec2)",
    display: "none",
    width: "30px",
    height: "30px",
    marginRight: "2em",
    marginLeft: "auto",
    position: "relative",
    cursor: "pointer",
    zIndex: "2000",
  },

  "> ul": {
    display: "flex",
    gap: "15px",
    marginLeft: "auto",
    marginRight: "25px",
    color: "var(--clr-clear)",
  },

  "@media screen and (max-width: 700px)": {
    "> ul": {
      position: "fixed",
      flexDirection: "column",
      top: "0",
      left: "0",
      backgroundColor: "var(--clr-sec2)",
      padding: "1em",
      minHeight: "100vh",
      minWidth: "60vw",
      gap: "30px !important",
      transition: "transform 0.2s ease, opacity 0.2s ease",
      boxShadow: "0 0 0 400px rgba(0,0,0,0.4)",
      zIndex: "4000",
    },
    ".responsive_menu": {
      display: "block",
    },
  },
};

export const styles_custom_drawer = (open: boolean): SxProps => ({
  ul: {
    position: "fixed",
    flexDirection: "column",
    top: "0",
    left: "0",
    backgroundColor: "var(--clr-sec2)",
    padding: "1em",
    minHeight: "100vh",
    minWidth: "calc(100vw - 30px - 4em)",
    gap: "30px !important",
    transition: "transform 0.2s ease, opacity 0.2s ease",
    boxShadow: "0 0 0 400px rgba(0,0,0,0.4)",
    zIndex: "4000",
    transform: open ? "translate(0)" : "translate(-100%)",
    opacity: open ? "1" : "0",

    a: {
      display: "block",
      padding: "1em 0.6em",
      borderBottom: "1px solid var(--clr-cinnamon-satin)",
    },
  },
  ".handle_close": {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: open ? "100vh" : "0",
    background: "rgba(0,0,0,0.1)",
  },
});
