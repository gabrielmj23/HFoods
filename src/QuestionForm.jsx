import { Button, TextField } from "@mui/material";

function QuestionForm() {
  return (
    <div>
      <TextField 
        required 
        id='correo' 
        label='Correo' 
        sx={{ marginBottom: 3 }} 
      />
      <TextField 
        required 
        multiline 
        fullWidth 
        id='mensaje' 
        label='Mensaje' 
        minRows={4} 
        sx={{ marginBottom: 3 }}
      />
      <Button
        variant='contained'
      >
        Enviar
      </Button>
    </div>
  );
}

export default QuestionForm;