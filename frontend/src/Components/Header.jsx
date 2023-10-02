import {
  BoxHeader,
  Brand,
  HeaderContainer,
  Actions,
} from "../Styles/components/header.js";
import { BoxAvatar } from "../Styles/components/avatar.js";
import { Button } from "../Styles/elements/Button.js";
import { NavLink } from "react-router-dom";
import { Box } from "../Styles/elements/Box.js";
import { useState } from "react";
import useClickOutside from "../hooks/useClickOutside.js";
import Modal from "./Modal.jsx";
import { FormAccount } from "./FormAccount.jsx";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../Config/Firebase.js";
import "../Styles/css-styles/header.css";

import React from "react";

export const Header = () => {
  const [form, setForm] = useState(false);
  const [formRef] = useClickOutside(setForm, form);
  const [signOut, loadingSignOut, errorSignOut] = useSignOut(auth);

  const isLogged = "unlogged";
  const [user, loadingAuth] = useAuthState(auth);
  const [accountState, setAccountState] = useState("");

  const onFormClick = (e, state) => {
    setForm(!form);
    e.stopPropagation();
    setAccountState(state);
  };

  const logOut = async () => {
    const success = await signOut();
    if (success) {
      alert("You are sign out");
    }
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <a className="nav__logo">| Llamkay</a>
          <ul className="nav__link-list">
            {user ? (
              <li className="nav__list-item nav__list-item--register">
                <a className="nav__link">Cerrar Sesión</a>
              </li>
            ) : (
              <>
                <li className="nav__list-item nav__list-item--login" onClick={(e) => onFormClick(e,"signIn")}>
                  <a className="nav__link">Iniciar Sesión</a>
                </li>
                <li className="nav__list-item nav__list-item--register" onClick={(e) => onFormClick(e,"signUp")}>
                  <a className="nav__link">Únete</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      {form && (
        <Modal>
          <FormAccount formRef={formRef} request={accountState}></FormAccount>
        </Modal>
      )}
    </>
  );
};

// const Header = () => {

//     const [form, setForm] = useState(false);
//     const [formRef] = useClickOutside(setForm,form);
//     const [signOut, loadingSignOut, errorSignOut] = useSignOut(auth);

//     const isLogged = "unlogged";
//     const [user,loadingAuth] = useAuthState(auth);
//     const [accountState,setAccountState] = useState("");

//     const onFormClick = (e, state) => {
//         setForm(!form);
//         e.stopPropagation();
//         setAccountState(state);

//     };

//     console.log(auth?.currentUser?.email);
//     console.log(user)

//     const logOut = async () =>{
//         const success = await signOut();
//         if (success) {
//         alert('You are sign out');
//         }
//     }

// return (
//     <>
//         <BoxHeader variant="header">
//             <HeaderContainer status={isLogged}>
//                 <Box>
//                     <NavLink to="/" className={""} >
//                         {/* <Brand src="logo_propio.png" alt="imagen logo"/> */}
//                         Llamkay
//                     </NavLink>
//                 </Box>
//                 <BoxAvatar>
//                     {
//                         user ? (<Actions>
//                             <Button variant="btn_access" destined="register" onClick={logOut}>
//                                 Cerrar sesion
//                             </Button>
//                         </Actions> ):(<Actions>
//                             <Button variant="btn_access" destined="register" onClick={(e) => onFormClick(e,"signUp")}>
//                                 Registrarse
//                             </Button>
//                             <Button variant="btn_access" destined="register" onClick={(e) => onFormClick(e,"signIn")}>
//                                 Iniciar sesion
//                             </Button>
//                         </Actions> )
//                     }
//                 </BoxAvatar>
//             </HeaderContainer>
//         </BoxHeader>
//         {
//             form && (
//                 <Modal>
//                     <FormAccount formRef={formRef} request={accountState}>
//                     </FormAccount>
//                 </Modal>
//             )
//         }
//     </>
// );
// }

export default Header;
