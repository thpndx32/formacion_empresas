import { useContext, useState } from "react"
import { AuthContext } from "../../App"
import { Button, Modal } from "@mui/material";
import { updateProfile } from "firebase/auth";
import { FormUpdateData } from "./FormUpdateData";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, where } from "firebase/firestore";
import { firestore } from "../../Config/Firebase";

export const Datos = () => {
    const [user,loadingUser] = useContext(AuthContext);
    const [update, setUpdate] = useState(false);
    const [data, loadingData, errData] = useCollection(query(collection(firestore,"Usuario"),where("correo","==",user.email)));
    return (
            !loadingUser && (
                <>
                    <div className="Dato">
                        {user.displayName}
                    </div>
                    <div className="Dato">
                        {user.email}
                    </div>
                    <Button onClick={()=>setUpdate(true)}>
                        Modificar Datos
                    </Button>
                    {!loadingData&&<FormUpdateData state={update} handleClose={()=>{setUpdate(false)}} data={data}/>}
                </>
            )
    )
}