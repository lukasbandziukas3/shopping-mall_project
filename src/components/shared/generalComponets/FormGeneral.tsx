import {
    Dialog,
    DialogTitle,
    DialogActions,
    Button,
    Zoom, Breakpoint,
} from "@mui/material";
import {ReactNode} from "react";

export function FormGeneral({
                                 isOpen = true,
                                 onClose,
                                 formMessage,
                                 onSave,
                                 maxWidth,
                                 children,
                             }:{
                                isOpen?: boolean,
                                onClose: () => void,
                                formMessage: string,
                                onSave: () => void,
                                maxWidth: Breakpoint,
                                children: ReactNode,

}){
    return (
        <Dialog
            maxWidth={maxWidth}
            fullWidth={true}
            TransitionComponent={Zoom}
            open={isOpen}
        >
            <DialogTitle>{formMessage}</DialogTitle>
            <DialogActions>
                {children}
                <Button variant="contained" onClick={onSave}>
                    {formMessage}
                </Button>
                <Button color="error" variant="contained" onClick={onClose}>
                    cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}
