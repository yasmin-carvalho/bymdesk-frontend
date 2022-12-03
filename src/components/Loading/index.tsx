import { Backdrop, CircularProgress } from "@mui/material";

interface LoadingProps {
  open: boolean;
  handleClose: React.MouseEventHandler<HTMLElement>;
}

export function Loading({ open, handleClose }: LoadingProps) {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleClose}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
