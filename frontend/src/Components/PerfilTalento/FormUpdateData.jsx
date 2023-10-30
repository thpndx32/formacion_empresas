import { Box, Button, IconButton, Modal } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../App"
import { useCollection } from "react-firebase-hooks/firestore"
import { firestore } from "../../Config/Firebase"
import { collection, doc, query, updateDoc, where } from "firebase/firestore"
import AddIcon from '@mui/icons-material/Add';
import { updateProfile } from "firebase/auth"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const FormUpdateData =(
    {state,handleClose, data}
)=>{
    const [user,loadingUser] = useContext(AuthContext);
    const [username, setUsername] = useState(user.displayName);
    const [comms, setComms] = useState([...data?.docs[0].data()?.comms]);
    let tempArray = comms;
    console.log("comms_",comms);
    const handleMod = async () => {
        tempArray = tempArray.filter(item => item!=="");
        console.log("temparra",tempArray);
        setComms(tempArray);
        await updateProfile(user, {displayName: username})
        await updateDoc(doc(firestore,"Usuario",`${user.uid}`),{username: username, comms: tempArray}).then(
            await data?.docs[0].data()?.comms.filter(item => item!=="")
        )
        handleClose();
    }
    return(
        <Modal
        open={state}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <input value={username} type="text" onChange={(event)=>{setUsername(event.target?.value)}}/> 
          {
            tempArray?.map((e,index)=>{
                tempArray[index] = comms[index];
                return (
                    <input key={index} type="text" placeholder="Forma de comunicarse con cliente" defaultValue={tempArray[index]} onChange={(e)=>{tempArray[index]=e?.target.value}}/>
                )
            })
          }
          <IconButton onClick={()=>{
                if(tempArray[tempArray.length-1]!=""){
                    console.log("cumple");
                    tempArray=[...tempArray,""];
                    setComms(tempArray);
                }
            }}>
                <AddIcon/>
          </IconButton>
          <Button onClick={handleMod}> Actualizar datos </Button>
        </Box>
      </Modal>
    )
}