import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function BackdropPage() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
        <button onClick={handleOpen} type="submit" className='bg-main-color hover:bg-white hover:border-2 hover:border-main-color w-[27rem] h-[3.25rem] mt-[2.5rem] rounded-md text-white hover:text-main-color font-semibold'>
            Masuk
        </button>
        <Backdrop
            sx={{ color: '#4E73DF', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    </div>
  );
}
