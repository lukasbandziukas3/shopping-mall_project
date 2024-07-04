import {
    Dialog,
    DialogTitle,
    DialogActions,
    Button,
    Zoom,
} from "@mui/material";

export function FormGeneral({
                                 isOpen = true,
                                 onClose,
                                 formMessage,
                                 onSave,
                                 maxWidth,
                                 children,

                             }) {
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
