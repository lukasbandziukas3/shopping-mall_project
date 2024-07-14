import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {jwtDecode} from "jwt-decode";
import {getAuthSuccess,} from "./redux/authSlice";
import {CustomProgress} from "../shared/CustomProgress";


export const RequireAuth = ({allowedRoles}) => {
    const location = useLocation();
    const dispatch = useDispatch();

    const {roles, status} = useSelector(state => state.auth);


    useEffect(() => {
        if(status  === "idle" && localStorage.getItem("jwtToken")){
              const decodedToken = jwtDecode(localStorage.getItem("jwtToken"));
              dispatch(getAuthSuccess(decodedToken))
          }
    }, [status]);

    if(status === 'idle' && localStorage.getItem("jwtToken")    ) {
        return <CustomProgress/>;
    }
    return(
            ( roles?.some(role => allowedRoles.includes(role))       ?  <Outlet/>
                 : <Navigate to={'/authorization'} state={{from: location}} replace/>
            )
        );
}