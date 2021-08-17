import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import useErrors from "../../hooks/useErrors";

function FormLogin({ onRegister, validations = [] }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, validateFields, canSubmit] = useErrors(validations);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (canSubmit({ email, password })) {
          onRegister({ email, password });
        }
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
        onBlur={validateFields}
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
        onBlur={validateFields}
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
