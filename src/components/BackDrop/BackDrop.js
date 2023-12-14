import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function BackdropPage() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(true);
  };
  return (
    <div>
      <Backdrop
        sx={{ color: "#4E73DF", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
