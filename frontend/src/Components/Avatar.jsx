import { useSignOut } from "react-firebase-hooks/auth";
import { ProfileBoxContainer } from "../Styles/components/profileBox"
import { Button } from "../Styles/elements/Button"
import { useCallback, useState } from "react";
import { auth } from "../Config/Firebase";
import useClickOutside from "../hooks/useClickOutside";
import { Box } from "../Styles/elements/Box";
import { BoxAvatar } from "../Styles/components/avatar";
import { ProfileBox } from "./ProfileBox";
import { Actions } from "../Styles/components/header";

export const Avatar = (
    user,
) => {

    const [signOut, loadingSignOut, errorSignOut] = useSignOut(auth);
    
    const [menuProfile, setMenuProfile] = useState(false);
    const [menuRef] = useClickOutside(setMenuProfile);
    

    const onMenuProfile = useCallback((e)=>{
        console.log(menuRef.current);
        if(menuRef.current?.contains(e.target)){
            setMenuProfile(!menuProfile);
            console.log("hi");
        }
        console.log(menuProfile);
    },[menuProfile]);

    const logOut = async () =>{
        const success = await signOut();
        if (success) {
        alert('You are sign out');
        }
    }

    return (
        <BoxAvatar variant="avatar">
            <BoxAvatar variant="avatar_elements">
            <Button variant="btn_access" destined="register" onClick={logOut}>
                Cerrar sesion
            </Button>
            <ProfileBoxContainer ref={menuRef} onClick={onMenuProfile}>
                <div>{user.user.displayName}</div>
            </ProfileBoxContainer>
            <Box gap="10px">
            {menuProfile && (
                <>
                    <BoxAvatar variant="modal_options">
                    <ul>
                        <div>
                            hola
                        </div>   
                        <div>
                            hola
                        </div>  
                        <div>
                            hola
                        </div>  
                        <div>
                            hola
                        </div>  
                        <div>
                            hola
                        </div>  
                    </ul>
                    </BoxAvatar>
                    
                </>
            )}
            </Box>
            
        </BoxAvatar> 
        </BoxAvatar>
    )
}