import {Navigate, Outlet, useLocation} from "react-router-dom";
import {CustomProgress} from "../shared/CustomProgress";
import {Roles} from "../../interfaces/globalTypes";
import { useAppSelector} from "../../hooks/reduxHooksTS";


export const RequireAuth  = ({allowedRoles} :{allowedRoles: Roles[]}) => {
    const location = useLocation();
    const {roles, status} = useAppSelector(state  => state.auth);

    if(status === 'idle' && localStorage.getItem("jwtToken")    ) {
        return <CustomProgress/>;
    }
    return(
            ( roles?.some(role => allowedRoles.includes(role))       ?  <Outlet/>
                 : <Navigate to={'/authorization'} state={{from: location}} replace/>
            )
        );
}