import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Formulario } from "../Styles/components/form";
import { auth } from "../Config/Firebase";

export const FormAccount = ({
    formRef,
    request,
}) => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    console.log(request);

    const handleFormClick = (e) => {
        e.stopPropagation();
    };

    const signUp = async () => {
        try{
            await createUserWithEmailAndPassword(auth, email, password);
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
        console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
        e.preventDefault();
        try {
            if (request==="signIn"){
                alert("entrando");
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
        <Formulario variant="primary" ref={formRef} onClick={handleFormClick}>
            <input type="email" name="username" placeholder="Escribe tu nombre de usuario" onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" name="password" placeholder="Escribe tu contraseña" onChange={(e)=>setPassword(e.target.value)}/>
            <button type="submit" onClick={toDo}>
                Ingresar
            </button>
        </Formulario>
    );
};