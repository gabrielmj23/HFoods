import { AppBar, Box, Container, Menu, IconButton, Toolbar, Typography, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import './App.css';

// Page sections available
const sections = [
  [ 'OFERTA', '#oferta' ],
  [ 'MISIÓN', '#mision' ],
  [ 'SOBRE NOSOTROS', '#nosotros' ],
  [ 'PREGUNTAS', '#preguntas' ]
];

function ResponsiveAppBar() {
  // Anchor state for menu (made for small screens)
  const [ anchorElNav, setAnchorElNav ] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }

  return (
    <AppBar position='sticky' sx={{ bgcolor: '#defff3' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography 
            variant='h6'
            component='a'
            href='/'
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Montserrat',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none'
            }}
          >
            HFOODS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon sx={{ color: '#2d2d2d' }}/>
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom', horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top', horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              { sections.map((section, index) => (
                <MenuItem key={index}>
                  <Typography textAlign='center' component='a' href={section[1]} className='appbar-link'>{section[0]}</Typography>
                </MenuItem>
              )) }
            </Menu>
          </Box>
          <Typography
            variant='h5'
            component='a'
            href=''
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Montserrat',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none'
            }}
          >
            HFOODS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            { sections.map((section, index) => (
              <Typography key={index} component='a' href={section[1]} className='appbar-link' sx={{ my: 3, fontFamily: 'Nunito' }}>
                { section[0] }
              </Typography>
            )) }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;