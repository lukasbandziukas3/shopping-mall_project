import {ChangeEvent, ReactElement, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {CustomProgress} from "../../components/shared/CustomProgress";
import {Button, Card, CardActions, CardContent, CardHeader} from "@mui/material";
import {TextFieldGeneral} from "../../components/shared/generalComponets/TextFieldGeneral";
import { userSignUp} from "../../components/auth/redux/thunk";
import Typography from "@mui/material/Typography";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooksTS";

export default function SignUpPage (): ReactElement {
    const {status,err} = useAppSelector((state) => state.auth);
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirmed, setPasswordConfirmed] = useState<string>('');
    const [isError, setIsError] = useState<boolean>(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();


    const onUserNameChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setIsError(false)
        setUserName(event.target.value);
    }

    const onPasswordChange = (event:  ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setIsError(false)
        setPassword(event.target.value);
    }

    const onPasswordConfirmedChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setIsError(false)
        setPasswordConfirmed(event.target.value);
    }

    useEffect(() => {
        if(status === "succeeded") {
            navigate('/');
        }
    }, [status, navigate]);

    const  handleSubmit =  () => {
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