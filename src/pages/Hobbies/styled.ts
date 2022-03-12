import { SxProps } from "@mui/material";



export const styles_hobbies: SxProps = {
    width: "100%",

    " ul":
    {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 1fr))",
        gridAutoRows: "200px",
        gap: "15px",

        " img":
        {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "0 0",
        },
        
        "  img[alt='Ciencia ficción']":
        {
            objectPosition: "50% 50%",
        },

        " .show": 
        {
            transform: "translateY(0)",
            opacity: "1",
        },

        " li":
        {
            transform: "translateY(-50%)",
            opacity: "0",
            transition: "0.5s",
            position: "relative",
            " p":
            {
                position: "absolute",
                inset: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.4)",
                color: "var(--clr-clear)",
                display: "grid",
                placeItems: "center",
                fontWeight: "600",
                fontSize: "1.2rem",
            }
        },
    },
    
}