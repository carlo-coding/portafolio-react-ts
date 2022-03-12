import { SxProps } from "@mui/material";





export const styles_contact: SxProps = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    color: "var(--clr-clear)",

    ".contact-button":
    {
        cursor: "pointer",
        fontSize: "1.1rem",
        border: "0",
        color: "var(--clr-clear)",
        width: "max-content",
        padding: "0.5em 1em",
        margin: "1.5em 0",
        backgroundColor: "var(--clr-cinnamon-satin)",
        borderRadius: "4px",
    },

    " .input-container":
    {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        margin: "0.5em 0",

        "& input, & textarea":
        {
            all: "initial",
            font: "inherit",
            color: "var(--clr-candy-pink)",
            padding: "0.5em 0",
            borderBottom: "1px solid var(--clr-candy-pink)",
        },

        "label":
        {
            color: "var(--clr-candy-pink)"
        }
    },

    " .form-container":
    {
        display: "flex",
        width: "100%",

        "img": 
        {
            width: "100%",
            minWidth: "200px",
            aspectRatio: "1.5/1",
            objectFit: "cover",
        },

        "form":
        {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "1em 2em",
        }
    },
    "@media screen and (max-width: 700px)":
    {
        ".form-container":
        {
            flexWrap: "wrap",
        }
    }
}