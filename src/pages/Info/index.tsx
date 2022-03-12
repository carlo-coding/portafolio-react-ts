import { Box } from "@mui/material"
import { styles_info } from "./styled"
import mePNG from "../../chest/files/me.png";
import Typewritter from "typewriter-effect"


export default function Info() {
    return (
        <Box
            sx={styles_info}
            component="main"
        >
            <div className="info-text">
                <Typewritter
                    options={{
                        strings: ['Me llamo', 'Jaan Carlo'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                <p>
                    Soy un programador autodidacta, fullstack y apasionado con la tecnología
                </p>
            </div>
            <div className="info-img">
                <img src={mePNG} />
            </div>
        </Box>
    )
}