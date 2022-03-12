import { Box } from "@mui/material";
import { styles_proyects } from "./styled";
import encriptadorPNG from "../../chest/files/encriptador.png";
import ahorcadoPNG from "../../chest/files/ahorcado.png";

export default function Projects(){

    return (
        <Box
            sx={styles_proyects}
        >
            <h2 className="regular-title">Proyectos</h2>
            <div className="card-project">
            <a target="_blank" href="https://carlo-coding.github.io/Challenge-One-Next-Encriptador/" className="image bottom-border" >
                <img src={ encriptadorPNG } alt="encriptador png" />
            </a>
            <div className="description">
                <h3>Proyecto Encriptador</h3>
                <p>
                Un simple proyecto para cifrar mensajes que siguen ciertas reglas de codificación
                </p>
                <a className="proyect-link" target="_blank" href="https://carlo-coding.github.io/Challenge-One-Next-Encriptador/">Visitar</a>
                <a className="proyect-link" target="_blank" href="https://github.com/carlo-coding/Challenge-One-Next-Encriptador">Ver en github</a>
            </div>
            </div>
            <div className="card-project">
            <a target="_blank" href="https://carlo-coding.github.io/ahorcado-js/" className="image bottom-border">
                <img src={ ahorcadoPNG } alt="ahorcado png" />
            </a>
            <div className="description">
                <h3>Proyecto Ahorcado</h3>
                <p>Segundo challenge del programa de One Next en Alura, se trata de un juego de ahorcado hecho en vanilla javascript y con modales, se pueden agregar nuevas palabras por el usuario que son almacenadas en el localstorage  </p>
                <a target="_blank" href="https://carlo-coding.github.io/ahorcado-js/" className="proyect-link">Visitar</a>
                <a target="_blank" href="https://github.com/carlo-coding/ahorcado-js" className="proyect-link">Ver en github</a>
            </div>
            </div>
        </Box>
    )
}