//import { Box } from "@mui/material"
import { styles_custom_drawer, styles_header } from "./styled";
import { Link } from "wouter";
import MenuIcon from "@mui/icons-material/Menu";

import * as React from "react";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";

const menuContent = (
  <React.Fragment>
    <ul>
      <li>
        <Link href="/blog">
          <a className="bottom-border" href="/blog">
            Blog
          </a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a className="bottom-border" href="/about">
            About me
          </a>
        </Link>
      </li>
      <li>
        <Link href="/skills">
          <a className="bottom-border" href="/skills">
            Skills
          </a>
        </Link>
      </li>
      <li>
        <Link href="/hobbies">
          <a className="bottom-border" href="/hobbies">
            Hobbies
          </a>
        </Link>
      </li>
      <li>
        <Link href="/education">
          <a className="bottom-border" href="/education">
            Education
          </a>
        </Link>
      </li>
      <li>
        <Link href="/projects">
          <a className="bottom-border" href="/projects">
            Projects
          </a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a className="bottom-border" href="/contact">
            Contact
          </a>
        </Link>
      </li>
    </ul>
  </React.Fragment>
);

interface Props {
  state: boolean;
  setState(state: boolean): void;
}

export default function Header({ state, setState }: Props) {
  const matches = useMediaQuery("(max-width: 700px)");

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  return (
    <Box sx={styles_header} component="header">
      <Link href="/">
        <a className="main-link bottom-border" href="/">
          Jaan Carlo
        </a>
      </Link>

      {matches ? (
        <CustomDrawer open={state} handleClose={toggleDrawer(false)}>
          {menuContent}
        </CustomDrawer>
      ) : (
        menuContent
      )}

      {matches && (
        <button className="responsive_menu" onClick={toggleDrawer(!state)}>
          <MenuIcon sx={{ color: "#fff" }} />
        </button>
      )}
    </Box>
  );
}

interface CustomDrawerProps {
  children?: React.ReactNode;
  open: boolean;
  handleClose(props: any): void;
}

function CustomDrawer({ children, open, handleClose }: CustomDrawerProps) {
  return (
    <Box sx={styles_custom_drawer(open)}>
      <div className="handle_close" onClick={handleClose}></div>
      {children}
    </Box>
  );
}
