import { SxProps } from "@mui/material";




export const styles_info: SxProps = {
    minHeight: "inherit",
    width: "100%",
    display: "flex",
    flexWrap: "wrap-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "var(--header-height)",

    " .info-text":
    {
        maxWidth: "40%",
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        color: "var(--clr-clear)",
        lineHeight: "1.5em",

        ".Typewriter__wrapper, .Typewriter__cursor":
        {
            fontSize: "2rem",
            fontWeight: "600"
        }
    },

    " .info-img":
    {
        width: "100%",
        minWidth: "100px",
        maxWidth: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform 0.5s",

        " img":
        {
            aspectRatio: "1/1",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "50%",
        }
    },

    "@media screen and (max-width: 700px)":
    {
        justifyContent: "center",
        ".info-text":
        {
            maxWidth: "100%"
        }
    }
}