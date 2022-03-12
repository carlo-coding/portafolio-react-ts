import { SxProps } from "@mui/material";



export const styles_education: SxProps = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5%",

    ".card.show":
    {
        transform: "translateY(0)",
        opacity: "1",
    },

    " .card":
    {
        transform: "translateY(-20%)",
        opacity: "0",
        transition: "0.5s",
        width: "250px",
        " img":
        {
            width: "100%",
            height: "100%",
            objectFit: "contain"
        }
    }
}