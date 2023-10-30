import { ContenidoPerfil } from "../Components/PerfilTalento/ContenidoPerfil";
import "../Styles/css-styles/views.css";
import "../Styles/css-styles/perfilTalento.css";
import { Datos } from "../Components/PerfilTalento/Datos.jsx";

export const PerfilTalento = () => {
    return (
        <div className="perfil">
            <div className="perfilTalento">
            <ContenidoPerfil/>
            </div>
        </div>
    )
}
