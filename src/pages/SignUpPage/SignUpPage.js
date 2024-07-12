import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {CustomProgress} from "../../components/shared/CustomProgress";
import {Button, Card, CardActions, CardContent, CardHeader} from "@mui/material";
import {TextFieldGeneral} from "../../components/shared/generalComponets/TextFieldGeneral";
import { userSignUp} from "../../components/auth/redux/thunk";
import Typography from "@mui/material/Typography";

export default function SignUpPage () {
    const {status,err} = useSelector((state) => state.auth);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmed, setPasswordConfirmed] = useState('');
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const onUserNameChange = (event) => {
        setIsError(false)
        setUserName(event.target.value);
    }

    const onPasswordChange = (event) => {
        setIsError(false)
        setPassword(event.target.value);
    }

    const onPasswordConfirmedChange = (event) => {
        setIsError(false)
        setPasswordConfirmed(event.target.value);
    }

    useEffect(() => {
        if(status === "succeeded") {
            navigate('/');
        }
    }, [status, navigate]);

    const  handleSubmit =  (e) => {
        if(!userName || !password || (passwordConfirmed !== password) ) {
            setIsError(true);
            return;
        }
        dispatch(userSignUp({nickName:userName, password, passwordConfirmed}))
    }

    return (
        <Card sx={{maxWidth:500, m:20} }>
            <CardHeader  title= "Authorize"  />
            <CardContent sx ={{display: "flex", flexDirection: "column", gap:3}} >
                {
                    status === "loading" ? <CustomProgress/> :(
                        <>
                            <TextFieldGeneral
                                value = {userName}
                                onValueChange = {onUserNameChange}
                                label = "User name"
                                errorMessage = "user name could not be empty"
                                error = {isError && userName.length === 0 }
                            />
                            <TextFieldGeneral
                                value = {password}
                                onValueChange = {onPasswordChange}
                                label = "password"
                                errorMessage = "password could not be less than 4 characters"
                                error = {isError && password.length < 4 }
                                type="password"
                            />
                            <TextFieldGeneral
                                value = {passwordConfirmed}
                                onValueChange = {onPasswordConfirmedChange}
                                label = "password confirmed"
                                errorMessage = "password confirm don't match password"
                                error = {isError && password !== passwordConfirmed }
                                type="password"
                            />
                        </>
                    )}
                <Link to="/authorization">Login</Link>
                <Button
                    sx = {{alignSelf: "end"}}
                    variant="contained"
                    onClick={ handleSubmit }
                >
                    Sign up
                </Button>
            </CardContent>
            <CardActions sx={{height: 10, color: "red", m:1}}>
                {err && isError &&   <Typography variant="h6">{err}</Typography> }
            </CardActions>
        </Card>
    )
}