import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function FormFotoPerfil(
    {state, handleClose, setImage, uploadImage, deleteImage}
) {

  return (
      <Modal
        open={state}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <input type="file" onChange={(event)=>{setImage(event.target?.files[0])}}/> 
          <Button onClick={uploadImage}> Subir Foto de Perfil </Button>
          <Button onClick={deleteImage}> Borrar Foto de Perfil </Button>
        </Box>
      </Modal>
  );
}
