import { Box } from "@mui/material";
import { styles_footer } from "./styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <Box sx={styles_footer} component="footer">
      <a
        href="https://github.com/carlo-coding"
        target="_blank"
        rel="noreferrer"
      >
        <div className="contact-icon">
          <GitHubIcon />
        </div>
        carlo-coding
      </a>
      <a href="mailto:jaanc.rt@gmail.com" target="_blank" rel="noreferrer">
        <div className="contact-icon">
          <MailIcon />
        </div>
        jaanc.rt@gmail.com
      </a>
      <a
        href="https://www.linkedin.com/in/jaan-carlo/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon />
        jaan-carlo
      </a>
      <a
        href="https://twitter.com/janrt03243200"
        target="_blank"
        rel="noreferrer"
      >
        <TwitterIcon />
        @janrt03243200
      </a>
    </Box>
  );
}
