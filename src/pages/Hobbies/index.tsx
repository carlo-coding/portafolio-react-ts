import { Box } from "@mui/material";
import { styles_hobbies } from "./styled"; // ../../chest/files/
import { ObserverList, ObservedItem } from "../../components/IntsObserver";

import valoPNG from "../../chest/files/valo.png";
import steinsJPG from "../../chest/files/steins.jpg";
import fantasyJPG from "../../chest/files/fantasy.jpg";
import daftJPG from "../../chest/files/daft.jpg";


export default function Hobbies(){


    return (
        <Box 
            sx={styles_hobbies}
        >
        <h2 className="regular-title">Mis Hobbies</h2>
            <ObserverList toggleClass="show">
                {({ saveItem }: any)=>(<>
                    <ObservedItem saveItem={saveItem}>
                        <p>Videojuegos</p>
                        <img src={ valoPNG } alt="Videojuegos" />
                    </ObservedItem>
                    <ObservedItem saveItem={saveItem}>
                        <p>Ciencia ficción</p>
                        <img src={ steinsJPG } alt="Ciencia ficción" />
                    </ObservedItem>
                    <ObservedItem saveItem={saveItem}>
                        <p>Libros de fantasía</p>
                        <img src={ fantasyJPG } alt="Libros de fantasía" />
                    </ObservedItem>
                    <ObservedItem saveItem={saveItem}>
                        <p>Música</p>
                        <img src={ daftJPG } alt="Música" />        
                    </ObservedItem>
                </>)}
            </ObserverList>
        </Box>
    )
}

