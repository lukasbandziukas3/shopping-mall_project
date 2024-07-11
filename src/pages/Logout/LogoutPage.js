import { useEffect } from 'react';
import { userLogout} from "../../components/auth/redux/thunk";
import {useDispatch} from "react-redux";

export default function Logout ()  {
    const dispatch = useDispatch();
    useEffect( () => {
         dispatch(userLogout());
    }, [ dispatch]);
return (
    <></>
);

};