import React, { useState, useEffect } from "react";
import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";
import FormRegister from "./FormRegister";
import FormLogin from "./FormLogin";
import FormAddress from "./FormAddress";

function RegisterContainer({ onRegister, onValidateCpf, onValidateRequired }) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  const forms = [
    <FormLogin
      onRegister={colectData}
      onValidateRequired={onValidateRequired}
    />,
    <FormRegister
      onRegister={colectData}
      onValidateCpf={onValidateCpf}
      onValidateRequired={onValidateRequired}
    />,
    <FormAddress onRegister={colectData} />,
    <Typography variant="h5">Obrigado por se cadastrar!</Typography>,
  ];

  const steps = ["Login", "Registre-se", "Endereço", "Finalização"];

  useEffect(() => {
    const formsLength = forms.length - 1;
    if (step === formsLength) {
      onRegister(formData);
    }
  });

  function colectData(data) {
    const updatedData = { ...formData, ...data };
    setFormData(updatedData);
    next();
  }

  function next() {
    setStep(step + 1);
  }

  return (
    <>
      <Stepper activeStep={step}>
        {[...steps].map((item, key) => (
          <Step key={key}>
            <StepLabel>{item}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {forms[step]}
    </>
  );
}

export default RegisterContainer;
