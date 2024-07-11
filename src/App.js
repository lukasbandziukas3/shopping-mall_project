import {RouterProvider} from "react-router-dom";
import {Container} from "@mui/material";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {router} from "./routes";
import ToastProvider from './contexts/ToastContext';

function App() {
    const status = useSelector((state) => state.auth.status);
    useEffect(() => {
        if(status !== 'succeeded' && window.location.pathname !== "/authorization" && !localStorage.getItem("jwtToken")){
            window.location = "/authorization";
        }
    }, [status]);
    return (
    <Container>
      <ToastProvider>
        <RouterProvider router={router} />
      </ToastProvider>
    </Container>
  );
}

export default App;
