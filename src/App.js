import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Formulario1 from './Formulario1';
import Formulario2 from './Formulario2';
import Formulario3 from './Formulario3';
import Alert from './Alert';
import { Stepper, Step, StepLabel } from '@mui/material';

function App() {
  const [step, setStep] = useState(0); // Cambiado a 0 para que coincida con los índices del Stepper
  const [alert, setAlert] = useState(null);
  const [formulario1Disabled, setFormulario1Disabled] = useState(false);
  const [formulario2Disabled, setFormulario2Disabled] = useState(true);
  const [formulario3Disabled, setFormulario3Disabled] = useState(true);

  const steps = ['Formulario 1', 'Formulario 2', 'Formulario 3'];

  const handleNextStep = () => {
    setStep(prevStep => prevStep + 1);
    if (step === 0) {
      setFormulario1Disabled(true);
      setFormulario2Disabled(false);
    } else if (step === 1) {
      setFormulario2Disabled(true);
      setFormulario3Disabled(false);
    }
  };

  const handleResetFormulario3 = () => {
    // Aquí restablecemos los estados relacionados con Formulario3
    setFormulario3Disabled(true);
    setStep(1); // Esto asegura que al cancelar desde Formulario3, vuelva a Formulario2 si es necesario
  };

  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => setAlert(null), 4000);
  };

  const renderForm = (step) => {
    switch (step) {
      case 0:
        return <Formulario1 onNext={handleNextStep} showAlert={showAlert} disabled={formulario1Disabled} />;
      case 1:
        return <Formulario2 onNext={handleNextStep} showAlert={showAlert} disabled={formulario2Disabled} />;
      case 2:
        return <Formulario3 onNext={handleNextStep} showAlert={showAlert} onReset={handleResetFormulario3} disabled={formulario3Disabled} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div className="content-container">
        <div className="stepper-container">
          <Stepper activeStep={step} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <div>{renderForm(index)}</div>
              </Step>
            ))}
          </Stepper>
        </div>
      </div>
      {alert && <Alert message={alert} />}
    </div>
  );
}

export default App;
