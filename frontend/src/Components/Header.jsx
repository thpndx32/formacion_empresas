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
import { useCallback, useState } from "react";
import useClickOutside from "../hooks/useClickOutside.js"
import Modal from "./Modal.jsx";
import { FormAccount } from "./FormAccount.jsx";
import { useAuthState,useSignOut } from "react-firebase-hooks/auth"
import { auth } from "../Config/Firebase.js";
import { ProfileBox } from "./ProfileBox.jsx";
import { ProfileBoxContainer } from "../Styles/components/profileBox.js";
import { Avatar } from "./Avatar.jsx";

const Header = () => {

    const [form, setForm] = useState(false);
    const [formRef] = useClickOutside(setForm,form);
    const [signOut, loadingSignOut, errorSignOut] = useSignOut(auth);

    const isLogged = "unlogged";
    const [user,loadingAuth] = useAuthState(auth);
    const [accountState,setAccountState] = useState("");



    const onFormClick = (e, state) => {
        setForm(!form);
        e.stopPropagation();
        setAccountState(state);
        
    };
    /*console.log(auth?.currentUser?.email);
    console.log(user)*/

    return (
        <>
            <BoxHeader variant="header">
                <HeaderContainer status={isLogged}>
                    <Box align-items="flex-start">
                        <NavLink to="/">
                            <Brand src="logo_propio.png" alt="imagen logo"/>
                        </NavLink>
                    </Box>
                    <BoxAvatar>
                        {
                            !loadingAuth ? (
                                <>
                                        {
                                    user ? (<Avatar user={user}></Avatar>):(<Actions>
                                        <Button variant="btn_access" destined="register" onClick={(e) => onFormClick(e,"signUp")}>
                                            Registrarse
                                        </Button>
                                        <Button variant="btn_access" destined="register" onClick={(e) => onFormClick(e,"signIn")}>
                                            Iniciar sesion
                                        </Button>
                                    </Actions> )
                                }
                                </>
                            ) :

                            <>
                                cargando
                            </>
                        }
                        
                    </BoxAvatar>
                </HeaderContainer>
            </BoxHeader>
            {
                form && (
                    <Modal>
                        <FormAccount formRef={formRef} request={accountState}>
                        </FormAccount>
                    </Modal>
                )
            }
        </>
    );
}

export default Header;