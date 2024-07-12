import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";


export const RequireAuth = ({allowedRoles}) => {
    const location = useLocation();
    const roles = useSelector(state => state.auth.roles);
    return(
        roles.some(role => allowedRoles.includes(role))
            ? <Outlet/>
            : <Navigate to={'/authorization'} state={{from: location}} replace/>
    );
}