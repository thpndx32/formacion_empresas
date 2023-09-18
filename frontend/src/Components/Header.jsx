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
import { FormAccount } from "./FormAccount.jsx";

const Header = () => {

    const [form, setForm] = useState(false);
    const [formRef] = useClickOutside(setForm,form);

    const onFormClick = (e) => {
        setForm(!form);
        e.stopPropagation();
    };

    const isLogged = "unlogged";
    const [accountState, setAccountState] = useState("");
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
                                    {setAccountState("register")}
                                    Registrarse
                                </Button>
                                <Button variant="btn_access" destined="register" onClick={onFormClick}>
                                    {setAccountState("login")}
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
                            rata
                        </div>
                        <FormAccount formRef={formRef} request={accountState}>

                        </FormAccount>
                    </Modal>
                )
            }
        </>
    );
}

export default Header;