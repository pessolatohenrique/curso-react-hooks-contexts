import React, { useState, useEffect } from "react";
import {
  Typography,
  Stepper,
  Step,
  StepLabel,
  Grid,
  Paper,
} from "@material-ui/core";
import { LoadContext } from "../../contexts/Contexts";
import FormRegister from "./FormRegister";
import FormLogin from "./FormLogin";
import FormAddress from "./FormAddress";
import { validateRequired, noValidate } from "../../utils/validation";
import { REQUIRED_MESSAGE } from "../../utils/messages";

function RegisterContainer({ onRegister }) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const forms = [
    <LoadContext.Provider value={loading}>
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
    </LoadContext.Provider>,
    <LoadContext.Provider value={loading}>
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
      />
    </LoadContext.Provider>,
    <LoadContext.Provider value={loading}>
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
      />
    </LoadContext.Provider>,
    <LoadContext.Provider value={loading}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5">Obrigado por se cadastrar!</Typography>
          <Paper>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
          </Paper>
        </Grid>
      </Grid>
    </LoadContext.Provider>,
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
    setLoading(true);

    //condition and setTimeOut only to demostrate loading
    if (updatedData.cpf) {
      setTimeout(() => {
        setFormData(updatedData);
        setLoading(false);
      }, 500);

      next();
      return;
    }

    setLoading(false);

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
