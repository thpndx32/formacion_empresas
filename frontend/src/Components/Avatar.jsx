import { useSignOut } from "react-firebase-hooks/auth";
import { ProfileBoxContainer } from "../Styles/components/profileBox"
import { Button } from "../Styles/elements/Button"
import { useCallback, useContext, useState } from "react";
import { auth } from "../Config/Firebase";
import useClickOutside from "../hooks/useClickOutside";
import { Box } from "../Styles/elements/Box";
import { BoxAvatar } from "../Styles/components/avatar";
import { ProfileBox } from "./ProfileBox";
import { Actions } from "../Styles/components/header";
import { Link } from "react-router-dom";
import { AuthContext } from "../App";

export const Avatar = (
    {
    data}
) => {
    const [user] = useContext(AuthContext);
    const [signOut, loadingSignOut, errorSignOut] = useSignOut(auth);
    
    const [menuProfile, setMenuProfile] = useState(false);
    const [menuRef] = useClickOutside(setMenuProfile);
    

    const onMenuProfile = useCallback((e)=>{
        handleClick(e);
        console.log(menuRef.current);
        if(menuRef.current?.contains(e.target)){
            setMenuProfile(!menuProfile);
            console.log("hi");
        }
        console.log("propagation",menuProfile);
    },[menuProfile]);

    const logOut = async () =>{
        const success = await signOut();
        if (success) {
        alert('You are sign out');
        }
    }

    const handleClick = (e) => {
        e.stopPropagation();
    };
    return (
        <BoxAvatar variant="avatar">
            <BoxAvatar variant="avatar_elements" ref={menuRef} onClick={onMenuProfile}>
            <ProfileBoxContainer>
                <div>{user?.displayName}</div>
            </ProfileBoxContainer>
            <Box gap="10px">
            {menuProfile && (
                    <BoxAvatar variant="modal_options" onClick={handleClick}>
                    <ul>
                        <Link to={"/perfil"}>
                            <li>
                                Perfil Usuario
                            </li>
                        </Link>
                        {
                            data?.talento && (
                                <Link to={"/perfilTalento"}>
                                    <li>
                                    Perfil Talento
                                    </li>  
                                </Link>
                            )
                        }
                        <li>
                            Historial de pedidos
                        </li>
                    </ul>
                    </BoxAvatar>
            )}
            </Box>
            
        </BoxAvatar> 
        </BoxAvatar>
    )
}