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

const Header = () => {

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
                                <Button variant="btn_access" destined="register">
                                    Registrarse
                                </Button>
                                <Button variant="btn_access" destined="register">
                                    Iniciar sesion
                                </Button>
                            </Actions>        
                        )}
                    </BoxAvatar>
                </HeaderContainer>
            </BoxHeader>
        </>
    );
}

export default Header;