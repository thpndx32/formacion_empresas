import { ContenidoPerfil } from "../Components/PerfilTalento/ContenidoPerfil";
import "../Styles/css-styles/views.css";
import "../Styles/css-styles/perfilTalento.css";
import { Datos } from "../Components/PerfilTalento/Datos";
export const PerfilTalento = () => {
    return (
        <div className="perfil">
            <div className="perfilTalento">
            <ContenidoPerfil/>
            </div>
        </div>
    )
}
/*
    en lugar de crear una pagina web por cada uno crear un componente que s puede crear
    por cada perfil sacandolo desde la base de datos
*/ 