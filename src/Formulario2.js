import React, { useState } from 'react';
import {
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Button,
    Typography,
    Card,
    CardContent,
    List,
    ListItem,
    ListItemText,
    Divider
} from '@mui/material';

const Formulario2 = ({ onNext, showAlert, disabled }) => {
    const [formData, setFormData] = useState({
        tipo_documento: '',
        numero_documento: '',
        nombre: '',
        apellido: '',
        direccion: '',
        telefono: '',
        correo: ''
    });

    const validate = () => {
        if (formData.tipo_documento === '') {
            showAlert('Tipo de documento es requerido');
            return false;
        }

        if (formData.numero_documento === '') {
            showAlert('Número de documento es requerido');
            return false;
        } else if (!/^[0-9]+$/.test(formData.numero_documento)) {
            showAlert('Número de documento inválido');
            return false;
        }

        if (formData.nombre === '') {
            showAlert('Nombre es requerido');
            return false;
        } else if (!/^[a-zA-Z ]+$/.test(formData.nombre)) {
            showAlert('Nombre inválido');
            return false;
        }

        if (formData.apellido === '') {
            showAlert('Apellido es requerido');
            return false;
        } else if (!/^[a-zA-Z ]+$/.test(formData.apellido)) {
            showAlert('Apellido inválido');
            return false;
        }

        if (formData.direccion === '') {
            showAlert('Dirección es requerida');
            return false;
        }

        if (formData.telefono === '') {
            showAlert('Teléfono es requerido');
            return false;
        } else if (!/^[0-9]+$/.test(formData.telefono)) {
            showAlert('Teléfono inválido');
            return false;
        }

        if (formData.correo === '') {
            showAlert('Correo es requerido');
            return false;
        } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
            showAlert('Correo inválido');
            return false;
        }

        return true;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            onNext();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='container-padre'>
                <div className='formulario2div1'>
                    <Typography sx={{ fontSize: 18 }} align='left'>Información del cliente</Typography>

                    <div className='div-container'>
                        <FormControl variant="filled" sx={{ minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-filled-label">Tipo de documento:</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                name="tipo_documento"
                                size='small'
                                align='left'
                                value={formData.tipo_documento}
                                onChange={handleChange}
                                disabled={disabled}
                            >
                                <MenuItem value="">
                                    <em>Seleccionar..</em>
                                </MenuItem>
                                <MenuItem value="Cedula">Cedula de ciudadanía</MenuItem>
                                <MenuItem value="Extranjeria">Cedula de extranjería</MenuItem>
                                <MenuItem value="NIT">NIT</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className='div-container'>
                        <TextField id="filled-basic" size='small' label="Numero de documento:" variant="filled" name="numero_documento" value={formData.numero_documento} onChange={handleChange} disabled={disabled} />
                    </div>
                    <div className='div-container'>
                        <TextField id="filled-basic" size='small' label="Nombre" variant="filled" name="nombre" value={formData.nombre} onChange={handleChange} disabled={disabled} />
                    </div>
                    <div className='div-container'>
                        <TextField id="filled-basic" size='small' label="Apellido" variant="filled" name="apellido" value={formData.apellido} onChange={handleChange} disabled={disabled} />
                    </div>
                    <div className='div-container'>
                        <TextField id="filled-basic" size='small' label="Dirección" variant="filled" name="direccion" value={formData.direccion} onChange={handleChange} disabled={disabled} />
                    </div>
                    <div className='div-container'>
                        <TextField id="filled-basic" size='small' label="Teléfono" variant="filled" name="telefono" value={formData.telefono} onChange={handleChange} disabled={disabled} />
                    </div>
                    <div className='div-container'>
                        <TextField id="filled-basic" size='small' label="Correo" variant="filled" name="correo" value={formData.correo} onChange={handleChange} disabled={disabled} />
                    </div>

                </div>
                <div className='formulario2div2'>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography sx={{ fontSize: 16 }} align='left'>Valor de liquidación</Typography>
                        </CardContent>
                    </Card>
                    <Card variant="outlined">
                        <CardContent>
                            <List sx={{ p: 0 }}>
                                <ListItem sx={{ p: 0 }} secondaryAction={<Typography align='left'>$ 7.000</Typography>}>
                                    <ListItemText primary={`ANSV`} />
                                </ListItem>
                                <ListItem sx={{ p: 0 }} secondaryAction={<Typography align='left'>$ 13.904</Typography>}>
                                    <ListItemText primary={`Recaudo`} />
                                </ListItem>
                                <ListItem sx={{ p: 0 }} secondaryAction={<Typography align='left'>$ 63.434</Typography>}>
                                    <ListItemText primary={`SICOV`} />
                                </ListItem>
                                <ListItem sx={{ p: 0 }} secondaryAction={<Typography align='left'>$ 23.124</Typography>}>
                                    <ListItemText primary={`RUNT`} />
                                </ListItem>
                                <ListItem sx={{ p: 0 }} secondaryAction={<Typography align='left'>$ 253.914</Typography>}>
                                    <ListItemText primary={`Valor servicio`} />
                                </ListItem>
                                <ListItem sx={{ p: 0 }} secondaryAction={<Typography align='left'>$ 33.112</Typography>}>
                                    <ListItemText primary={`IVA Servicio`} />
                                </ListItem>
                                <Divider variant='middle' />
                                <ListItem sx={{ p: 0 }} secondaryAction={<Typography sx={{ fontSize: 20, fontWeight: 'bold' }} align='left'>$ 956.904</Typography>}>
                                    <ListItemText primary={`Total`} />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>

                </div>
                <div className='div-botones'><Button color="error" type="submit" variant="contained" disabled={disabled}>Continuar</Button></div>
            </div>

        </form>
    );
};

export default Formulario2;
