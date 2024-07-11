import {RouterProvider} from "react-router-dom";
import {router} from "./routes";
import {Container} from "@mui/material";
import {useSelector} from "react-redux";
import {useEffect} from "react";

function App() {
    const status = useSelector((state) => state.auth.status);
    useEffect(() => {
        if(status !== 'succeeded' && window.location.pathname !== "/authorization"){
            window.location = "/authorization";
        }
    }, [status]);
    return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
