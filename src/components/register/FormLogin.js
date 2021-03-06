import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import useErrors from "../../hooks/useErrors";
import { LoadContext } from "../../contexts/Contexts";
import CustomLoader from "../../utils/CustomLoader";

function FormLogin({ onRegister, validations = [] }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, validateFields, canSubmit] = useErrors(validations);

  return (
    <LoadContext.Consumer>
      {(loading) => {
        return (
          <form
            noValidate
            onSubmit={(event) => {
              event.preventDefault();

              if (canSubmit({ email, password })) {
                onRegister({ email, password });
              }
            }}
          >
            {loading && (
              <CustomLoader isLoading={loading} data-testid="loading" />
            )}
            <TextField
              data-testid="email"
              id="email"
              type="email"
              label="E-mail"
              variant="outlined"
              fullWidth
              margin="normal"
              required={validations["email"].required}
              error={!errors.email.valid}
              helperText={errors.email.message}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              onBlur={validateFields}
            />

            <TextField
              data-testid="password"
              id="password"
              type="password"
              label="Senha"
              variant="outlined"
              fullWidth
              margin="normal"
              required={validations["password"].required}
              error={!errors.password.valid}
              helperText={errors.password.message}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              onBlur={validateFields}
            />
            <br />
            <br />
            <Button type="submit" variant="contained" color="primary">
              Pr??ximo
            </Button>
          </form>
        );
      }}
    </LoadContext.Consumer>
  );
}

export default FormLogin;
