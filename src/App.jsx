import { AppBar, Box, Button, Container, Grid, Toolbar, Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <AppBar position='fixed' className='mui_navbar' sx={{ bgcolor: '#defff3', fontFamily: 'Oxygen' }}>
        <Container maxWidth='xl' spacing={4}>
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} textAlign={'center'}>
              <Typography component='a' href='#productos'>
                <Button sx={{ my: 2, color: 'black', display: 'block' }}>Productos</Button>              
              </Typography>
              <Typography component='a' href='#mision'>
                <Button sx={{ my: 2, color: 'black', display: 'block' }}>Mision</Button>
              </Typography>
              <Typography component='a' href='#nosotros'>
                <Button sx={{ my: 2, color: 'black', display: 'block' }}>Sobre nosotros</Button>
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Grid container spacing={3} maxWidth={'100%'} mx={3}>
        <Grid item xs={8}>
          <h1>Come saludable y responsable, <b>sin salir de tu casa</b></h1>
        </Grid>
        <Grid item xs={4}>
          <img src='' alt='Foto relativa a la marca' />
        </Grid>
      </Grid>
    </div>
  )
}

export default App;
