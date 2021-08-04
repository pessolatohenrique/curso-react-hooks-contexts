import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form>
      <TextField
        id="email"
        type="email"
        label="E-mail"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <TextField
        id="password"
        type="password"
        label="Senha"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
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
