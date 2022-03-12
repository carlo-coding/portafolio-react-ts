import { SxProps } from "@mui/material";




export const styles_proyects: SxProps = {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    gap: "2em",

    " .card-project":
    {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        padding: "1em 0",

        " .image":
        {
            display: "inline-block",
            minWidth: "50%",
            maxWidth: "250px",
            height: "400px",
            outline: "1px dashed var(--clr-cinnamon-satin)",
        },

        " a img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "50% 0",
        },

        " .description":
        {
            color: "var(--clr-clear)",
            display: "flex",
            flexDirection: "column",
            gap: "2em",
            width: "100%",
            padding: "1em",
        },

        " .proyect-link":
        {
            width: "max-content",
            padding: "0.5em 1em",
            backgroundColor: "var(--clr-cinnamon-satin)",
            borderRadius: "4px",
        },
    },

    "@media screen and (min-width: 700px)":
    {
        " .card-project:nth-of-type(2n) .image":
        {
            order: "1"
        },
    },

    "@media screen and (max-width: 700px)":
    {
        "div.card-project":
        {
            flexWrap: "wrap",
            
            "a.image":
            {
                maxWidth: "none",
                width: "100%",
                height: "300px",
            }
        }
    }
}