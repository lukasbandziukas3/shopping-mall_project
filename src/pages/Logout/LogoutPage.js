import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {userLogin} from "../../components/auth/redux/thunk";
import {useDispatch} from "react-redux";

export default function Logout ()  {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userLogin());
        navigate('/authorization');
    }, [navigate, dispatch]);

};