import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  Zoom,
} from "@mui/material";

export function CategoryForm({
  isOpen,
  onClose,
  formMessage,
  onSaveCategory,
  children,
}) {
  return (
    <Dialog
      maxWidth="sm"
      fullWidth={true}
      TransitionComponent={Zoom}
      open={isOpen}
    >
      <DialogTitle>{formMessage}</DialogTitle>
      <DialogActions>
        {children}
        <Button variant="contained" onClick={onSaveCategory}>
          {formMessage}
        </Button>
        <Button color="error" variant="contained" onClick={onClose}>
          cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
