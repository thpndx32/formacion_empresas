import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateCurrentUser, updateProfile } from "firebase/auth";
import { Formulario } from "../Styles/components/form";
import { auth, db } from "../Config/Firebase";
import { doc, setDoc } from "firebase/firestore";

export const FormAccount = ({
    formRef,
    request,
}) => {

    const [email,setEmail] = useState("");
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");
    console.log(request);

    const handleFormClick = (e) => {
        e.stopPropagation();
    };

    const signUp = async () => {
        try{
            const usr = await createUserWithEmailAndPassword(auth, email, password).then((usrFireBase)=>{
                return usrFireBase;
            });
            await updateProfile(auth.currentUser, {displayName: user}).catch((err)=> console.error(err));
            const docuRef = doc(db,`Usuario/${usr.user.uid}`);
            setDoc(docuRef, {correo: email, talento: false});
        }catch(err){
            console.error(err);
        }
    };

    const signIn = async () => {
        try{
            await signInWithEmailAndPassword(auth, email, password);
        }catch(err){
            console.error(err);
        }
    };

    const toDo = async (e) => {
        e.preventDefault();
        try {
            if (request==="signIn"){
                await signIn();
            } else if (request==="signUp"){
                await signUp();
            } else {
                console.log("Pedido Invalido");
            }
        } catch (err){
            console.error(err);
        }
    };
    return  (
        <Formulario variant="primary" ref={formRef} onClick={handleFormClick}>{
            request === "signIn" ? 
            <>
                <input type="email" name="email" placeholder="Escribe tu correo" onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" name="password" placeholder="Escribe tu contraseña" onChange={(e)=>setPassword(e.target.value)}/>
            </>
            :
            <>
                <input type="email" name="username" placeholder="Escribe tu correo" onChange={(e)=>setEmail(e.target.value)}/>
                <input type="text" name="username" placeholder="Escribe tu nombre de usuario" onChange={(e)=>setUser(e.target.value)}/>
                <input type="password" name="password" placeholder="Escribe tu contraseña" onChange={(e)=>setPassword(e.target.value)}/>
            </>
        }
            
            <button type="submit" onClick={toDo}>
                Ingresar
            </button>
        </Formulario>
    );
};