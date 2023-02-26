import { SxProps } from "@mui/material";

export const styles_skills: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  minHeight: "100vh",
  ".cards": {
    gap: "10px",
  },
  " .card": {
    "--clr-card": "var(--clr-mn-blue)",
    position: "relative",
    width: "300px",
    overflow: "hidden",
    transformStyle: "preserve-3d",
    transform: "perspective(1000px)",
  },

  " .card svg": {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },

  " .card .card-content": {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) translateZ(20px)",
    width: "100%",
    opacity: "0",
    color: "var(--clr-clear)",
    padding: "0 2em",
    zIndex: "2000",
    transitionDelay: " 0.5s",
    transition: "0.5s",
  },

  " .card .card-title": {
    "--local-space": "3em",
    position: "absolute",
    fontSize: "0.8rem",
    borderRadius: "50%",
    display: "grid",
    placeItems: "center",
    backgroundColor: "var(--clr-card)",
    boxShadow: "0 0 0 0 var(--clr-card)",
    top: "var(--local-space)",
    left: "var(--local-space)",
    transform: "translate(-50%, -50%)",
    color: "var(--clr-clear)",
    fontWeight: "700",
    transition: "0.5s",
  },

  "@media (hover: hover)": {
    " .card:hover .card-title": {
      boxShadow: "0 0 0 400px var(--clr-card)",
    },

    " .card:hover .card-content": {
      transform: "translate(-50%, -50%)",
      opacity: "1",
    },
  },

  "@media screen and (max-width: 700px)": {
    ".card p.card-title": {
      backgroundColor: "rgba(0,0,0,0.5)",
      boxShadow: "0 0 0 400px rgba(0,0,0,0.5)",
    },

    ".card p.card-content": {
      transform: "translate(-50%, -50%)",
      opacity: "1",
    },
  },
};
