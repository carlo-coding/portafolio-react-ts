import { Box } from "@mui/material";
import { styles_about } from "./styled";




export default function About(){
    return (
        <Box
            sx={styles_about}
        >
            <h2 className="regular-title">Sobre mi</h2>
            <div className="about-content">
                <p>Soy un programador autodidacta, me encanta resolver problemas complicados y hacer todo lo posible por que las cosas queden bien y sean accesibles al mayor público posible usando todas las herramientas que nos regala css y javascript.</p>
                <p>Me encanta trabajar en equipo y mantener una extensa comunicación entre varias partes de un proyecto para evitar malentendidos.</p>
                <p>Te invito a ver mi sección de <a href="#skills" className="bottom-border">skills.</a></p>
                <p>Actualmente me encuentro aprendiendo modelado y animación 3D en blender, Three Js y React three fiber, Backend en Node.js y desarrollo de aplicaciones móviles con React Native y Firebase</p>
            </div>
        </Box>
    )
}