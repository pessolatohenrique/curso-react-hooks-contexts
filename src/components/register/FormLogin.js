import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function FormLogin({ onRegister, validations = [] }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: { valid: true, message: "" },
    password: { valid: true, message: "" },
  });

  function verifyError(event) {
    const validation = validations[event.target.id];

    if (!validation) return;

    const validationFunction = validation.functionRef;
    const validationResult = validationFunction(event.target.value);
    const validationMessage = validation.messageRef;
    const newErrors = { ...errors };

    newErrors[event.target.id] = {
      valid: validationResult,
      message: validationResult ? "" : validationMessage,
    };

    setErrors(newErrors);
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onRegister({ email, password });
      }}
    >
      <TextField
        id="email"
        type="email"
        label="E-mail"
        variant="outlined"
        fullWidth
        margin="normal"
        error={!errors.email.valid}
        helperText={errors.email.message}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        onBlur={(event) => verifyError(event)}
      />

      <TextField
        id="password"
        type="password"
        label="Senha"
        variant="outlined"
        fullWidth
        margin="normal"
        error={!errors.password.valid}
        helperText={errors.password.message}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        onBlur={(event) => verifyError(event)}
      />
      <br />
      <br />
      <Button type="submit" variant="contained" color="primary">
        Salvar
      </Button>
    </form>
  );
}

export default FormLogin;
