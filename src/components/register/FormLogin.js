import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { verifyError } from "../../utils/validation";

function FormLogin({ onRegister, validations = [] }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: { valid: true, message: "" },
    password: { valid: true, message: "" },
  });

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
        onBlur={(event) => {
          const newErrors = verifyError(event, validations, errors);
          setErrors(newErrors);
        }}
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
        onBlur={(event) => {
          const newErrors = verifyError(event, validations, errors);
          setErrors(newErrors);
        }}
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
