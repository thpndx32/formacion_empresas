import {
  BoxHeader,
  Brand,
  HeaderContainer,
  Actions,
} from "../Styles/components/header.js";
import { BoxAvatar } from "../Styles/components/avatar.js";
import { Button } from "../Styles/elements/Button.js";
import { Link, NavLink } from "react-router-dom";
import { Box } from "../Styles/elements/Box.js";
import { useCallback, useContext, useEffect, useState } from "react";
import useClickOutside from "../hooks/useClickOutside.js"
import Modal from "./Modal.jsx";
import { FormAccount } from "./FormAccount.jsx";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth, firestore } from "../Config/Firebase.js";
import "../Styles/css-styles/header.css";
import { ProfileBox } from "./ProfileBox.jsx";
import { ProfileBoxContainer } from "../Styles/components/profileBox.js";
import { Avatar } from "./Avatar.jsx";
import { useCollection } from 'react-firebase-hooks/firestore'

import React from "react";
import { collection, doc, getDoc, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { AuthContext } from "../App.jsx";

export const Header = () => {
  const [form, setForm] = useState(false);
  const [formRef] = useClickOutside(setForm, form);
  const [signOut, loadingSignOut, errorSignOut] = useSignOut(auth);
  const [user,loadingUsr] = useContext(AuthContext);
    const [accountState,setAccountState] = useState("");
    const [data, setData] = useState();

    const logOut = async () =>{
                 const success = await signOut();
                 if (success) {
            alert('You are sign out');
            }
        }

    const registerTalent = async () => {
      const docRef = doc(firestore,`Usuario/${user?.uid}`);
      await updateDoc(docRef,{
        talento: true
      });
    }

    const q = query(collection(firestore,'Usuario'),where("correo","==",`${user?.email}`));
    const [value,loadingVal, errorVal] = useCollection(q);
    console.log("query",value);
    useEffect(()=>{
      console.log("query1",value);
      setData(value?.docs[0]?.data());
    },[value]);
    
    console.log("Unsub",data?.talento);
    const onFormClick = (e, state) => {
        setForm(!form);
        e.stopPropagation();
        setAccountState(state);
        
    };
    /*console.log(auth?.currentUser?.email);
    console.log(user)*/

  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <Link to={"/"} className="nav__logo">| Llamkay</Link>
          <ul className="nav__link-list">{
            !loadingUsr ? <>
            {!loadingVal&&(user ? (
                <>
                    <li className="nav__list-item nav__list-item--register" onClick={logOut}>
                        <a className="nav__link">Cerrar Sesión</a>
                    </li>
                    { !data?.talento &&
                      <li className="nav__list-item nav__list-item--register" onClick={registerTalent}>
                      <a className="nav__link">Registrarse como talento</a>
                      </li>
                    }
                    <Avatar data={data}></Avatar>  
                </>
              
            ) : (
              <>
                <li className="nav__list-item nav__list-item--login" onClick={(e) => onFormClick(e,"signIn")}>
                  <a className="nav__link">Iniciar Sesión</a>
                </li>
                <li className="nav__list-item nav__list-item--register" onClick={(e) => onFormClick(e,"signUp")}>
                  <a className="nav__link">Únete</a>
                </li>
              </>
            ))}
                </>:
                <>
                    cargando
                </>
            }
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
