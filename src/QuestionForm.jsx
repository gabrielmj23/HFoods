import { Button, IconButton, Snackbar, TextField } from '@mui/material';
import { Close } from '@mui/icons-material';
import { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

function QuestionForm() {
  // Question states
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  // Snackbar states
  const [okResponse, setOkResponse] = useState(false);
  const [badResponse, setBadResponse] = useState(false);

  // Form validation setup
  const validationSchema = Yup.object().shape({
    correo: Yup.string()
      .trim().required('El correo no puede estar vacío')
      .email('El correo debe ser válido'),
    mensaje: Yup.string()
      .trim().required('El mensaje no puede estar vacío')
      .max(2000, 'El mensaje no puede superar los 200 caracteres')
  });

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  // POST question to Discord webhook
  const addQuestion = async (data) => {
    try {
      const url = `https://discord.com/api/webhooks/${import.meta.env.VITE_WEBHOOK_DIR}`;
      // Send request
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: `_${data.correo}_ envía un mensaje:
          **${data.mensaje}**`
        })
      });
      // Clear input fields on correct response
      if (response.status === 204) {
        setCorreo('');
        setMensaje('');
        setOkResponse(true);
      }
      // Show error message
      else {
        setBadResponse(true);
        const resData = await response.json();
        console.error(JSON.stringify(resData));
      }
    }
    catch (err) {
      setBadResponse(true);
      console.error(err);
    }
  }

  // Handle ok response snackbar closing
  const handleOkClose = (event, reason) => {
    if (reason == 'clickaway')
      return;
    setOkResponse(false);
  }

  // Handle bad response snackbar closing
  const handleBadClose = (event, reason) => {
    if (reason == 'clickaway')
      return;
    setBadResponse(false);
  }

  const closeAction = (handler) => {
    return (
      <Fragment>
        <IconButton size='small' aria-label='close' color='inherit' onClick={handler}>
          <Close fontSize='small' />
        </IconButton>
      </Fragment>
    )
  }

  return (
    <form autoComplete='off' onSubmit={handleSubmit(addQuestion)}>
      <TextField 
        required 
        name='correo' 
        label='Correo'
        value={correo}
        {...register('correo')}
        error={errors.correo ? true : false}
        helperText={errors.correo?.message}
        onChange={e => setCorreo(e.target.value)}
        sx={{ marginBottom: 3 }} 
      />
      <TextField 
        required 
        multiline 
        fullWidth 
        name='mensaje' 
        label='Mensaje' 
        minRows={4} 
        value={mensaje}
        {...register('mensaje')}
        error={errors.mensaje ? true : false}
        helperText={errors.mensaje?.message}
        onChange={e => setMensaje(e.target.value)}
        sx={{ marginBottom: 3 }}
      />
      <Button variant='contained' type='submit'>
        Enviar
      </Button>
      <Snackbar
        id='okSnackbar'
        open={okResponse}
        autoHideDuration={4000}
        onClose={handleOkClose}
        message='Mensaje enviado'
        action={closeAction(handleOkClose)}
      />
      <Snackbar
        id='badSnackbar'
        open={badResponse}
        autoHideDuration={4000}
        onClose={handleBadClose}
        message='Error enviando mensaje, intente de nuevo'
        action={closeAction(handleBadClose)}
      />
    </form>
  );
}

export default QuestionForm;