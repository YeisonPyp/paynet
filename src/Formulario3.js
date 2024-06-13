import React, { useState } from 'react';
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Button,
  Modal,
  Box,
  Typography
} from '@mui/material';

const Formulario3 = ({ onNext, showAlert, onReset, disabled }) => {
  const [formData, setFormData] = useState({
    pago: ''
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [transactionSuccess, setTransactionSuccess] = useState(false);

  const validate = () => {
    if (formData.pago === '') {
      showAlert('Forma de pago es requerida');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setTransactionSuccess(true); // Indicar que la transacción fue exitosa
      setModalOpen(true); // Abrir el modal de confirmación
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const resetForm = () => {
    setFormData({ pago: '' });
    setTransactionSuccess(false);
    setModalOpen(false);
    onReset(); // Llamar a la función de reseteo del componente padre (App)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='container-padre'>
        <div className='formulario1div1'>
          <div className='div-container'>
            <FormControl>
              <FormLabel sx={{ fontSize: 20}} align='left'>Pago:</FormLabel>
              <RadioGroup row name="pago" value={formData.pago} onChange={handleChange} >
                <FormControlLabel disabled={disabled} value="efectivo" control={<Radio />} label="Efectivo" labelPlacement="bottom"/>
                <FormControlLabel disabled={disabled} value="pse" control={<Radio />} label="PSE" labelPlacement="bottom"/>
                <FormControlLabel disabled={disabled} value="corresponsal" control={<Radio />} label="Corresponsal Bancario" labelPlacement="bottom"/>
                <FormControlLabel disabled={disabled} value="datafono" control={<Radio />} label="Datáfono" labelPlacement="bottom"/>
              </RadioGroup>
            </FormControl>
          </div>
          <div className='div-botones'>
            <Button color="error" variant='outlined' onClick={resetForm}>Cancelar</Button>
            <Button color="error" type="submit" variant="contained">Generar</Button>
          </div>
        </div>
      </div>

      {/* Modal de Transacción Exitosa */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          textAlign: 'center'
        }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Transacción Exitosa
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            ¡La transacción se ha realizado con éxito!
          </Typography>
          <Button onClick={resetForm} sx={{ mt: 2 }}>Cerrar</Button>
        </Box>
      </Modal>
    </form>
  );
};

export default Formulario3;
