import { Box, Divider, Grid, Paper, Stack, Typography } from '@mui/material';
import ResponsiveAppBar from './ResponsiveAppBar';
import QuestionForm from './QuestionForm';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      
      <Box sx={{ width: '100%', marginTop: 10 }} display='flex' alignItems='center' justifyContent='center'>
        <Paper elevation={8} sx={{ paddingBottom: 5, paddingTop: 5, width: '85rem' }}>
          <Grid container sx={{ height: '100%' }} spacing={1}>
            <Grid item container justifyContent='center' alignItems='center' xs={12} md={8}>
              <Stack spacing={0}>
                <Typography variant='h2' component='h1' align='center' className='title' sx={{ fontFamily: 'Montserrat', marginBottom: '0.5rem' }}>
                  Come saludable y responsable,
                </Typography>
                <Typography variant='h3' component='h2' align='center' className='subtitle' sx={{ fontFamily: 'Montserrat', fontStyle: 'italic' }}>
                  sin salir de tu casa
                </Typography>
              </Stack>
            </Grid>
            <Grid item container justifyContent='center' alignItems='center' xs={12} md={3}>
              <img
                src='/maincard-img.png'
                alt='Foto relativa a la marca'
                width='500'
                height='500'
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>

      <Divider sx={{ padding: 4, marginLeft: '5vw', marginRight: '5vw' }} />

      <Box sx={{ width: '100%', marginTop: 4 }} display='flex' alignItems='center' justifyContent='center'>
        <Paper id='oferta' elevation={8} sx={{ paddingBottom: 5, paddingTop: 5, width: '50rem' }}>
          <Grid container spacing={2} alignItems='center' justifyContent='center'>
            <Grid item xs={8} md={3}>
              <Typography variant='h4' component='h3' align='center' sx={{ fontFamily: 'Montserrat' }}>
                Nuestra oferta
              </Typography>
            </Grid>
            <Divider orientation='vertical' flexItem sx={{ display: { xs: 'none', md: 'flex' } }} />
            <Grid item xs={8} md={7}>
              <Typography align='center' sx={{ fontFamily: 'Nunito' }}>
                Ofrecemos un camino hacia un estilo de vida saludable, con alimentos org??nicos, caseros, atentos a todas tus necesidades, y con delivery inmediato
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      <Box sx={{ width: '100%', marginTop: 4 }} display='flex' alignItems='center' justifyContent='center'>
        <Paper id='mision' elevation={8} sx={{ paddingBottom: 5, paddingTop: 5, width: '50rem' }}>
          <Grid container spacing={2} alignItems='center' justifyContent='center'>
            <Grid item xs={8} md={3}>
              <Typography variant='h4' component='h3' align='center' sx={{ fontFamily: 'Montserrat' }}>
                Nuestra misi??n
              </Typography>
            </Grid>
            <Divider orientation='vertical' flexItem sx={{ display: { xs: 'none', md: 'flex' } }} />
            <Grid item xs={8} md={7}>
              <Typography align='center' sx={{ fontFamily: 'Nunito' }}>
                Mejorar en t??rminos de salud el estilo de vida venezolano, ofreciendo alimentos de calidad con gran atenci??n al detalle, adem??s de recetas variadas e inclusivas seg??n las distintas necesidades
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      <Box sx={{ width: '100%', marginTop: 4 }} display='flex' alignItems='center' justifyContent='center'>
        <Paper id='nosotros' elevation={8} sx={{ paddingBottom: 5, paddingTop: 5, width: '50rem' }}>
          <Grid container spacing={2} alignItems='center' justifyContent='center'>
            <Grid item xs={8} md={3}>
              <Typography variant='h4' component='h3' align='center' sx={{ fontFamily: 'Montserrat' }}>
                Sobre nosotros
              </Typography>
            </Grid>
            <Divider orientation='vertical' flexItem sx={{ display: { xs: 'none', md: 'flex' } }} />
            <Grid item xs={8} md={7}>
              <Typography align='center' sx={{ fontFamily: 'Nunito' }}>
                Somos un grupo de estudiantes de la asignatura "Innovaci??n y Emprendimiento" de la UCAB, elaborando este proyecto a nivel te??rico para mostrar una idea innovadora y validar su potencial en el mercado
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      <Divider sx={{ padding: 4, marginLeft: '5vw', marginRight: '5vw' }} />

      <Box sx={{ width: '100%', marginTop: 3 }} display='flex' alignItems='center' justifyContent='center'>
        <Paper id='preguntas' elevation={6} sx={{ width: '50rem', bgcolor: '#a2dbc6', marginTop: 2 }}>
          <Grid container spacing={2} alignItems='center' justifyContent='center' sx={{ padding: 4 }}>
            <Grid item xs={10} md={5}>
              <QuestionForm />
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant='h4' component='h4' align='center' gutterBottom className='subtitle' sx={{ fontFamily: 'Nunito' }}>
                D??janos cualquier pregunta o comentario
              </Typography>
              <Typography variant='body2' align='center' sx={{ color: '#454747' }}>
                Tu correo ser?? compartido en caso de requerir contactarte
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      <footer>
        <Box sx={{ width: '100%', height: '4rem', marginTop: 3, bgcolor: '#d4d4d4' }} display='flex' alignItems='center' justifyContent='center'>
          <Typography>
            Hecho por <Typography component='a' href='https://github.com/gabrielmj23' sx={{ color: '#4e51a3' }}>Gabriel M??ndez</Typography> ????
          </Typography>
        </Box>
      </footer>
    </div>
  )
}

export default App;
