import { useEffect } from 'react';
import { userLogout} from "../../components/auth/redux/thunk";
import {useAppDispatch} from "../../hooks/reduxHooksTS";

export default function Logout ()  {
    const dispatch = useAppDispatch();
    useEffect( () => {
         dispatch(userLogout());
    }, [ dispatch]);
};