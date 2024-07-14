import {RouterProvider} from "react-router-dom";
import {Container} from "@mui/material";
import {router} from "./routes";
import ToastProvider from './contexts/ToastContext';

function App() {

    return (
    <Container>
      <ToastProvider>
        <RouterProvider router={router} />
      </ToastProvider>
    </Container>
  );
}

export default App;
