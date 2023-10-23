import {Navigate, Outlet} from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../App';
export const PrivateRoutes = () => {
    const usr = useContext(AuthContext);
    console.log(usr);
    return(
        usr ? <Outlet/> : <Navigate to="/"/>
    )
}