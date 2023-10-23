import { useEffect, useRef } from "react";


const elmModal = document.getElementById("modal")


const useClickOutside = (setValue, animation) => {
  const domNode = useRef();
  const anim = useRef(animation)

  console.log(domNode);

  const handleOnClose = () => {
    if(anim.current === true){
      elmModal.firstElementChild.classList?.remove('openModal')     
      elmModal.firstElementChild.classList?.add('closingModal')  
    }
    setTimeout(()=> {
      setValue(false)
    }, anim.current === true ? 500 : 0)
  }

  /*--------- DETECTA LOS CLICKS DEL USUARIO ---------*/
  useEffect(() => {
    const handleMouseDown = (e) => {            
      if (!domNode.current?.contains(e.target)) 
        handleOnClose()   
    };
    const handleKey = (e) => {      
      if (e.key === "Escape")
        handleOnClose()      
    };
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keyup", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("keyup", handleKey)
    }
  }, [domNode]);

  /*--------- ACTUALIZA Y INGREZA LA ANIMACION ---------*/
  
  useEffect(()=> {
    anim.current = animation    
    if(animation === true)
      setTimeout(()=> {
        elmModal.firstElementChild.classList.add('openModal')
        elmModal.firstElementChild.classList.remove('closingModal')
      })          
  }, [animation])
  //console.log(domNode);
  return [domNode, handleOnClose];
};

export default useClickOutside;