import { Box } from "@mui/material";
import { styles_info } from "./styled";
import mePNG from "../../chest/files/me.png";
import Typewritter from "typewriter-effect";

export default function Info() {
  return (
    <Box sx={styles_info} component="main">
      <div className="info-text">
        <Typewritter
          options={{
            strings: ["My name is Jaan Carlo Rivera", "Front End Developer"],
            autoStart: true,
            loop: true,
          }}
        />
        <p>
          I am a self-taught programmer, fullstack and passionate about the
          technology
        </p>
      </div>
      <div className="info-img">
        <img src={mePNG} alt="Jaan Carlo" />
      </div>
    </Box>
  );
}
