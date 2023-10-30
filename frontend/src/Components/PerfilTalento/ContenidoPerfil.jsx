import { deleteObject, getDownloadURL, getMetadata, ref, uploadBytes } from "firebase/storage"
import { storage } from "../../Config/Firebase"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../App";
import { updateProfile } from "firebase/auth";
import "../../Styles/css-styles/perfilTalento.css";
import FormFotoPerfil from "./FormFotoPerfil";
import { Datos } from "./Datos";

export const ContenidoPerfil = () =>{
   
    const [image, setImage] = useState();
    const [user] = useContext(AuthContext);
    const perfilRef = ref(storage, `${user.displayName}/fotoPerfil`);
    const [metadata, setMetadata] = useState();
    const [urlPerfil, setUrlPerfil] = useState("");
    const [uploadFoto, setUploadFoto] = useState(false);
    const [fileExists, setFileExists] = useState(false);
    useEffect(()=>{
        try{getMetadata(perfilRef).then((metadata) =>{
            console.log("metadata",metadata);
            setMetadata(metadata);
            setFileExists(true);
        })
        }catch(err){
            if (err.code === 'storage/object-not-found'){
                setFileExists(false);
                console.log("error",err);
            }else{
                console.log(err);
            }
        }
    },[uploadFoto]);
    const handleUpload = () =>{
        setUploadFoto(true);
        console.log("upload");
    }
    const uploadImage = async () =>{
        if (!image) return;
        uploadBytes(perfilRef, image).then(async ()=>{
            try{
                 getDownloadURL(perfilRef).then((url) =>{
                    updateProfile(user,{photoURL:`${url}`}).catch((err)=> console.log(err));
                })
                alert("Image uploaded successfully");
                console.log("photo",getDownloadURL(perfilRef));
                console.log("photo",user?.photoURL);
                setFileExists(true);
                setImage(null);
                setUploadFoto(false);
            } catch (err){
                if (err.code === 'storage/object-not-found'){
                    setFileExists(false);
                    console.log("error",err);
                }else{
                    console.log(err);
                }
            }
        })
    };
    const deleteImage = async () =>{
        deleteObject(perfilRef).then(()=>{
            updateProfile(user,{photoURL:""}).catch((err)=> console.log(err));
            alert("Image deleted successfully");
            setUploadFoto(false);
            setImage(null);
            setFileExists(false);
        }).catch((error) =>{});
    }
    useEffect(()=>{
         try{getDownloadURL(perfilRef).then((url)=>{
                setUrlPerfil(url);
                setFileExists(true);
            })}catch(err){
            if (err.code === 'storage/object-not-found'){
                setFileExists(false);
                console.log("error",err);
            }else{
                console.log(err);
            }
        }
    },[metadata]);
    return (
        <div className="contentPerfil">
           {!fileExists?(
            <div className="contenedorFoto" onClick={handleUpload}>
                <img src="UsuarioDefault.jpg" className="fotoPerfil"/>
            </div>)
           :
           (
            <div className="contenedorFoto" onClick={handleUpload}>
                <img src={urlPerfil} className="fotoPerfil" ></img>
            </div>
            )}
            <div className="Datos">
                <Datos/>
            </div>
           <FormFotoPerfil state={uploadFoto} handleClose={()=>{setImage(null);setUploadFoto(false);}} setImage={setImage} uploadImage={uploadImage} deleteImage={deleteImage}/>
        </div>
    )
}