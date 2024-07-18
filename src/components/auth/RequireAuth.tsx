import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useEffect} from "react";
import {jwtDecode} from "jwt-decode";
import {getAuthSuccess,} from "./redux/authSlice";
import {CustomProgress} from "../shared/CustomProgress";
import {Roles, TokenInfo} from "../../interfaces/globalTypes";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooksTS";


export const RequireAuth  = ({allowedRoles} :{allowedRoles: Roles[]}) => {
    const location = useLocation();
    const dispatch = useAppDispatch();

    const {roles, status} = useAppSelector(state  => state.auth);

    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        if(status  === "idle" && token){
              const decodedToken = jwtDecode<TokenInfo>(token);
              console.log(decodedToken,"token")
              dispatch(getAuthSuccess(decodedToken))
          }
    }, [status, dispatch]);

    if(status === 'idle' && localStorage.getItem("jwtToken")    ) {
        return <CustomProgress/>;
    }
    return(
            ( roles?.some(role => allowedRoles.includes(role))       ?  <Outlet/>
                 : <Navigate to={'/authorization'} state={{from: location}} replace/>
            )
        );
}