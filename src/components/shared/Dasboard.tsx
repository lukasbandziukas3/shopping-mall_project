import React, {useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {Box} from "@mui/material";
import {NavigationPanel} from "./navigation/Navigation";
import {jwtDecode} from "jwt-decode";
import {TokenInfo} from "../../interfaces/globalTypes";
import {getAuthSuccess} from "../auth/redux/authSlice";
import {useAppSelector} from "../../hooks/reduxHooksTS";
import {useDispatch} from "react-redux";
import {CustomProgress} from "./CustomProgress";

export  default function  Dashboard  (): React.ReactElement {
    const  status = useAppSelector(state  => state.auth.status);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        const token = localStorage.getItem("jwtToken");;
        if(!token){
            navigate('/authorization');
        }
        if(status  === "idle" && token){
            const decodedToken = jwtDecode<TokenInfo>(token);
            dispatch(getAuthSuccess(decodedToken))
        }
    }, [status, dispatch]);

    if (status === "loading" || status === "idle") {
        return <CustomProgress/>
    }
    return(
        <Box >
          <NavigationPanel/>
          <Outlet />
        </Box>
    )
}