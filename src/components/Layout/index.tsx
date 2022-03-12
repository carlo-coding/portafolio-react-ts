import { Box } from "@mui/material"
import { useState } from "react";
import Footer from "../Footer";
import Header from "../Header"
import { styles_layout } from "./styled";


interface IProps
{
    children?: React.ReactNode
}


export default function Layout({ children }: IProps) {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <Box
            sx={styles_layout}
        >
            <Header state={openDrawer} setState={setOpenDrawer}/>
            {children}
            <Footer />
        </Box>
    )
}