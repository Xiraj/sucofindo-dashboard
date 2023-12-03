  import { useEffect, useState } from 'react';
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
  import { Link, useNavigate } from 'react-router-dom';
  import { Badge, Button } from '@mui/material';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import axios from 'axios';

  const settings = ['Keluar'];

  function UserAppBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const [name, setName] = useState('');
    useEffect(() => {
        axios.get('https://sima-rest-api.vercel.app/api/v1/user/profile', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          },
        })
        .then(response => {
          const username = response.data.username;
          setName(username);
          console.log("Hahaha", username)
        })
        .catch(error => {
          console.error('Error fetching user profile:', error);
        });
      }
    ,[])
    

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    const handleLogout = async (e) => {
      e.preventDefault();
    
      try {
        // Make the request to log out
        const response = await axios.post(
          'https://sima-rest-api.vercel.app/api/v1/auth/signOut',
          {},
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
            },
          }
        );
    
        if (response.status === 200) {
          console.log('Logout successful', response.data);
    
          localStorage.clear();
    
          navigate('/Login');
          toast('Logout Berhasil!');
        } else {
          console.error('Logout failed', response.data);
          setError('Logout Gagal');
        }
      } catch (error) {
        console.error('Logout error', error);
        setError('Logout Gagal');
      }
    };    

    return (
      <>
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
                  <h1 className="pr-2 text-[1rem]">{name}</h1>
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
                    <Link onClick={handleLogout}>
                      <Typography textAlign="center">{setting}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <ToastContainer/>
      </>
    );
  }

  export default UserAppBar;
