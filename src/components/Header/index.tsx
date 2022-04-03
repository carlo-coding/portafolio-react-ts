//import { Box } from "@mui/material"
import { styles_custom_drawer, styles_header } from "./styled";
import { Link } from "wouter";
import MenuIcon from '@mui/icons-material/Menu';

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useMediaQuery } from "@mui/material";

const menuContent = (
    <React.Fragment>
        <ul>
            <li>
                <Link href="/blog">
                    <a className="bottom-border">Blog</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a className="bottom-border">Sobre mi</a>
                </Link>
            </li>
            <li>
                <Link href="/skills">
                    <a className="bottom-border">Skills</a>
                </Link>
            </li>
            <li>
                <Link href="/hobbies">
                    <a className="bottom-border">Hobbies</a>
                </Link>
            </li>
            <li>
                <Link href="/education">
                    <a className="bottom-border">Formación</a>
                </Link>
            </li>
            <li>
                <Link href="/projects">
                    <a className="bottom-border">Proyectos</a>
                </Link>
            </li>
            <li>
                <Link href="/contact">
                    <a className="bottom-border">Contacto</a>
                </Link>
            </li>
        </ul>
    </React.Fragment>
)

interface Props 
{
    state: boolean,
    setState(state: boolean): void
}

export default function Header ({ state, setState }: Props) {

    const matches = useMediaQuery("(max-width: 700px)");

    const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState(open);
    };

    return (
        <Box 
            sx={styles_header}
            component="header"
        >
            <Link href="/">
                <a className="main-link bottom-border">Jaan Carlo</a>
            </Link>

            {matches
            ?(
                <CustomDrawer
                    open={state}
                    handleClose={toggleDrawer(false)}
                >
                    {menuContent}
                </CustomDrawer>
            )
            :(
                menuContent
            )}

            {matches && (
                <button className="responsive_menu" onClick={toggleDrawer(!state)}>
                    <MenuIcon sx={{color: "#fff"}}/>
                </button>
            )}
        </Box>
    );
}




interface CustomDrawerProps
{
    children?: React.ReactNode,
    open: boolean, 
    handleClose(props: any): void  
}

function CustomDrawer({ children, open, handleClose }: CustomDrawerProps) {


    return (
        <Box
        
            sx={styles_custom_drawer(open)}
        >   
        <div
            className="handle_close"
            onClick={handleClose}
        ></div>
            {children}
        </Box>
    )
}