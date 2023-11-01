import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { FaRegBell, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const settings = ['Keluar'];

function UserAppBar({ username }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  console.log('apa',username)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const notify = () => toast("Barang Keluar", "(", " ", ")");

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ position: 'relative', left: '53.8rem' }}>
              <MenuItem>
                <IconButton
                  size="small"
                  aria-label="show 17 new notifications"
                  color="inherit"
                  onClick={notify}
                >
                  <Badge badgeContent={1} color="error">
                    <FaRegBell color='#4E73DF' size={26}/>
                  </Badge>
                  <ToastContainer />
                </IconButton>
              </MenuItem>
            </Box>
            <Tooltip title="Apakah kamu sudah seleai menggunakan dashboard?">
              <IconButton onClick={handleOpenUserMenu} sx={{ position: 'relative', left: '53.8rem' }}>
                {username && (
                  <h1 className='pr-2 text-[1rem]'>{username}</h1>
                )}
                <FaUserCircle color='#4E73DF' size={30}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '2.813rem' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Link to='/Login'>
                    <Typography textAlign="center">{setting}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default UserAppBar;
