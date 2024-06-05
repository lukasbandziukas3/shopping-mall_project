import { Box, CircularProgress } from "@mui/material";

export const CustomProgress = () => {
  return (
    <Box
      sx={{
        mt: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <CircularProgress size={"5rem"} />
    </Box>
  );
};
