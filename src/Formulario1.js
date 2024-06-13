import React, { useState } from 'react';
import {
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormLabel,
    Button
} from '@mui/material';


const Formulario1 = ({ onNext, showAlert, disabled }) => {
    const [formData, setFormData] = useState({
        placa: '',
        confirmacion_placa: '',
        modelo: '',
        tipo_vehiculo: '',
        servicio: '',
        forma_pago: ''
    });

    const validate = () => {
        if (formData.placa === '') {
            showAlert('Placa es requerida');
            return false;
        }

        if (formData.confirmacion_placa === '') {
            showAlert('Confirmación de placa es requerida');
            return false;
        } else if (formData.confirmacion_placa !== formData.placa) {
            showAlert('Las placas no coinciden');
            return false;
        }

        if (formData.modelo === '') {
            showAlert('Modelo es requerido');
            return false;
        }

        if (formData.tipo_vehiculo === '') {
            showAlert('Tipo de vehículo es requerido');
            return false;
        }

        if (formData.servicio === '') {
            showAlert('Servicio es requerido');
            return false;
        }

        if (formData.forma_pago === '') {
            showAlert('Forma de pago es requerida');
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onNext();
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='container-padre'>
                <div className='formulario1div1'>
                    <div className='div-container'>
                        <TextField id="filled-basic" size="small" label="Placa" variant="filled" name="placa" value={formData.placa} onChange={handleChange} disabled={disabled} />
                        <TextField id="filled-basic" size="small" label="Confirmación de placa" variant="filled" name="confirmacion_placa" value={formData.confirmacion_placa} onChange={handleChange} disabled={disabled} />
                        <FormControl variant="filled" sx={{ minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-filled-label">Modelo</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                size="small"
                                name="modelo"
                                align='left'
                                value={formData.modelo}
                                onChange={handleChange}
                                disabled={disabled}
                            >
                                <MenuItem value="">
                                    <em>Seleccionar Modelo</em>
                                </MenuItem>
                                {[...Array(50).keys()].map(i => (
                                    <MenuItem key={i} value={2023 - i}>{2023 - i}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className='div-container'>
                        <FormControl variant="filled" sx={{ minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-filled-label">Tipo de Vehículo</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                size="small"
                                name="tipo_vehiculo"
                                align='left'
                                value={formData.tipo_vehiculo}
                                onChange={handleChange}
                                disabled={disabled}
                            >
                                <MenuItem value="">
                                    <em>Seleccionar Tipo de Vehículo</em>
                                </MenuItem>
                                <MenuItem value="Particular">Particular</MenuItem>
                                <MenuItem value="Público">Público</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="filled" sx={{ minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-filled-label">Servicio</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                size="small"
                                name="servicio"
                                align='left'
                                value={formData.servicio}
                                onChange={handleChange}
                                disabled={disabled}
                            >
                                <MenuItem value="">
                                    <em>Seleccionar Servicio</em>
                                </MenuItem>
                                <MenuItem value="A1">A1</MenuItem>
                                <MenuItem value="B1">B1</MenuItem>
                                <MenuItem value="C1">C1</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className='div-container'>
                        <FormControl>
                            <FormLabel align='left'>Forma de pago:</FormLabel>
                            <RadioGroup row name="forma_pago" value={formData.forma_pago} onChange={handleChange} disabled={disabled}>
                                <FormControlLabel value="Contado" disabled={disabled} control={<Radio />} label="Contado" />
                                <FormControlLabel value="TioPaco" disabled={disabled} control={<Radio />} label="Tío Paco" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
                <div className='div-botones'><Button color="error" type="submit" variant="contained" disabled={disabled}>Consultar</Button></div>
            </div>
        </form>
    );
};

export default Formulario1;
