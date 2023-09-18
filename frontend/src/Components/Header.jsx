import {
    BoxHeader,
    Brand,
    HeaderContainer,
    Actions
} from "../Styles/components/header.js";
import { BoxAvatar } from "../Styles/components/avatar.js";
import { Button } from "../Styles/elements/Button.js";
import { NavLink } from "react-router-dom";
import { Box } from "../Styles/elements/Box.js";
import { useState } from "react";
import useClickOutside from "../hooks/useClickOutside.js"
import Modal from "./Modal.jsx";

const Header = () => {

    const [form, setForm] = useState(false);
    const [formRef] = useClickOutside(setForm,form);

    const onFormClick = (e) => {
        setForm(!form);
        e.stopPropagation();
    };

    const isLogged = "unlogged";
    return (
        <>
            <BoxHeader variant="header">
                <HeaderContainer status={isLogged}>
                    <Box>
                        <NavLink to="/">
                            <Brand src="logo_propio.png" alt="imagen logo"/>
                        </NavLink>
                    </Box>
                    <BoxAvatar>
                        {isLogged === "unlogged" && (
                            <Actions>
                                <Button variant="btn_access" destined="register" onClick={onFormClick}>
                                    Registrarse
                                </Button>
                                <Button variant="btn_access" destined="register" onClick={onFormClick}>
                                    Iniciar sesion
                                </Button>
                            </Actions>        
                        )}
                    </BoxAvatar>
                </HeaderContainer>
            </BoxHeader>
            {
                form && (
                    <Modal>
                        <div>
                            hola
                        </div>
                    </Modal>
                )
            }
        </>
    );
}

export default Header;