import { Box } from "@mui/material";
import { styles_contact } from "./styled";
import phonePNG from "../../chest/files/phone.png";

export default function Contact(){

    return (
        <Box
            sx={styles_contact}
        >
            <h2 className="regular-title">Contacto</h2>
            <div className="form-container">
            <img src={ phonePNG } alt="phone image"/>
            <form className="form-container" method="post" action="https://formspree.io/f/xzbogowd">
                <div className="input-container">
                    <label>Nombre</label>
                    <input name="name" placeholder="Ingresa tu nombre" autoComplete="off" required/>
                </div>
                <div className="input-container">
                    <label>Email</label>
                    <input name="email" placeholder="Ingresa tu correo" type="email" autoComplete="off" required/>
                </div>
                <div className="input-container">
                    <label>Asunto</label>
                    <input name="matter" placeholder="Asunto" autoComplete="off"/>
                </div>
                <div className="input-container">
                    <label>Mensaje</label>
                    <textarea name="message" placeholder="Ingresa tu mensaje" autoComplete="off"></textarea>
                </div>
                <button className="contact-button" type="submit">Contactar</button>
            </form> 
            </div>
        </Box>
    )
}