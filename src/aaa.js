import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Formulario1 from './Formulario1';
import Formulario2 from './Formulario2';
import Formulario3 from './Formulario3';
import Alert from './Alert';

function App() {
  const [step, setStep] = useState(1);
  const [alert, setAlert] = useState(null);
  const [formulario1Disabled, setFormulario1Disabled] = useState(false); // Estado para deshabilitar Formulario1
  const [formulario2Disabled, setFormulario2Disabled] = useState(false); // Estado para deshabilitar Formulario2

  const handleNextStep = () => {
    setStep(step + 1);
    // Dependiendo del paso actual, deshabilitar el formulario correspondiente
    if (step === 1) {
      setFormulario1Disabled(true);
    } else if (step === 2) {
      setFormulario2Disabled(true);
    }
  };

  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => setAlert(null), 4000);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="form-container">
        <Formulario1 onNext={handleNextStep} showAlert={showAlert} disabled={formulario1Disabled} />
        {step >= 2 && <Formulario2 onNext={handleNextStep} showAlert={showAlert} disabled={formulario2Disabled} />}
        {step === 3 && <Formulario3 />}
      </div>
      {alert && <Alert message={alert} />}
    </div>
  );
}

export default App;
