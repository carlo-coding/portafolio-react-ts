import { Box } from "@mui/material";
import { styles_education } from "./styled";
import { ObserverList, ObservedItem } from "../../components/IntsObserver";

import freecodeJPG from "../../chest/files/freecode.jpg";
import campusLogoPNG from "../../chest/files/campus-logo.png";
import aluraPNG from "../../chest/files/alura.png";

export default function Education(){

    return (
        <Box
            sx={styles_education}
        >
            <h2 className="regular-title">Formación</h2>
            <ObserverList toggleClass="show" className="cards">
                {({ saveItem }: any)=> (<>
                    <ObservedItem saveItem={saveItem} className="card">
                        <img src={ freecodeJPG } alt="Freecodecamp_logo" />
                    </ObservedItem>
                    <ObservedItem saveItem={saveItem} className="card">
                        <img src={ campusLogoPNG } alt="bicentenario_logo" />
                    </ObservedItem>
                    <ObservedItem saveItem={saveItem} className="card">
                        <img src={ aluraPNG } alt="Alura Latam logo" />
                    </ObservedItem>
                
                </>)}
            </ObserverList>
        </Box>
    )
}