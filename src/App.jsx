import { AppBar, Box, Container, Grid, Paper, Typography } from '@mui/material';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppBar position='fixed' className='mui_navbar' sx={{ bgcolor: '#defff3' }}>
        <Container maxWidth='xl' spacing={4}>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} textAlign={'center'}>
            <Typography component='a' href='#productos' className='appbar-link' sx={{ my: 3, fontFamily: 'Nunito' }}>
              PRODUCTOS
            </Typography>
            <Typography component='a' href='#mision' className='appbar-link' sx={{ my: 3, fontFamily: 'Nunito' }}>
              MISION
            </Typography>
            <Typography component='a' href='#nosotros' className='appbar-link' sx={{ my: 3, fontFamily: 'Nunito' }}>
              SOBRE NOSOTROS
            </Typography>
          </Box>
        </Container>
      </AppBar>
      <Box sx={{ width: '100%' }} display='flex' alignItems='center' justifyContent='center'>
        <Paper elevation={8} sx={{ paddingBottom: 5, paddingTop: 5, width: '85%' }}>
          <Grid container spacing={3}>
            <Grid item xs={6} md={8}>
              <Typography variant='h2' component='h1' align='center' sx={{ fontFamily: 'Montserrat' }}>
                Come saludable y responsable,
              </Typography>
              <Typography variant='h3' component='h2' align='center' sx={{ fontFamily: 'Montserrat', fontStyle: 'italic' }}>
                sin salir de tu casa
              </Typography>
            </Grid>
            <Grid item xs={6} md={4}>
              <img src='' alt='Foto relativa a la marca' />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  )
}

export default App;
