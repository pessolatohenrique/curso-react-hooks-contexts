import React, { useState, useEffect } from "react";
import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";
import { ThemeContext } from "../../App";
import FormRegister from "./FormRegister";
import FormLogin from "./FormLogin";
import FormAddress from "./FormAddress";
import { validateRequired, noValidate } from "../../utils/validation";
import { REQUIRED_MESSAGE } from "../../utils/messages";

function RegisterContainer({ onRegister, onValidateCpf, onValidateRequired }) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  const forms = [
    <ThemeContext.Consumer>
      {(theme) => {
        console.log("theme context", theme);
        return (
          <FormLogin
            onRegister={colectData}
            validations={{
              email: {
                functionRef: validateRequired,
                messageRef: REQUIRED_MESSAGE,
              },
              password: {
                functionRef: validateRequired,
                messageRef: REQUIRED_MESSAGE,
              },
            }}
          />
        );
      }}
    </ThemeContext.Consumer>,
    <FormRegister
      onRegister={colectData}
      validations={{
        name: {
          functionRef: validateRequired,
          messageRef: REQUIRED_MESSAGE,
        },
        lastname: {
          functionRef: validateRequired,
          messageRef: REQUIRED_MESSAGE,
        },
        cpf: {
          functionRef: validateRequired,
          messageRef: REQUIRED_MESSAGE,
        },
      }}
    />,
    <FormAddress
      onRegister={colectData}
      validations={{
        cep: {
          functionRef: validateRequired,
          messageRef: REQUIRED_MESSAGE,
        },
        address: {
          functionRef: validateRequired,
          messageRef: REQUIRED_MESSAGE,
        },
        number: {
          functionRef: validateRequired,
          messageRef: REQUIRED_MESSAGE,
        },
        complement: {
          functionRef: noValidate,
          messageRef: "",
        },
        city: {
          functionRef: validateRequired,
          messageRef: REQUIRED_MESSAGE,
        },
        state: {
          functionRef: validateRequired,
          messageRef: REQUIRED_MESSAGE,
        },
      }}
    />,
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
