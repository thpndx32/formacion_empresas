import {
    BoxHeader,
    Brand,
    HeaderContainer
} from "../Styles/components/header.js";
import { NavLink } from "react-router-dom";
import { Box } from "../Styles/elements/Box.js";

const Header = () => {

    const isLogged = "false";
    return (
        <>
            <BoxHeader variant="container">
                <HeaderContainer status={isLogged}>
                    <Box>
                        <NavLink to="/">
                            <Brand src="logo192.png" alt="imagen logo"/>
                        </NavLink>
                    </Box>
                </HeaderContainer>
            </BoxHeader>
        </>
    );
}

export default Header;