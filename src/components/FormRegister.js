import React, { useState } from "react";
import { TextField, Button, FormControlLabel, Switch } from "@material-ui/core";

function FormRegister({ onRegister, onValidateCpf, onValidateRequired }) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [cpf, setCpf] = useState("");
  const [sales, setSales] = useState(true);
  const [news, setNews] = useState(true);
  const [errors, setErrors] = useState({
    name: { valid: true, message: "" },
    lastname: { valid: true, message: "" },
    cpf: { valid: true, message: "" },
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onRegister({ name, lastname, cpf, sales, news });
      }}
    >
      <TextField
        id="name"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
        error={!errors.name.valid}
        helperText={errors.name.message}
        value={name}
        onChange={(event) => setName(event.target.value)}
        onBlur={(event) => {
          const validate = onValidateRequired(
            event.target.id,
            event.target.value,
            errors
          );
          setErrors(validate);
        }}
      />
      <TextField
        id="lastname"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
        error={!errors.lastname.valid}
        helperText={errors.lastname.message}
        value={lastname}
        onChange={(event) => setLastname(event.target.value)}
        onBlur={(event) => {
          const validate = onValidateRequired(
            event.target.id,
            event.target.value,
            errors
          );
          setErrors(validate);
        }}
      />
      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
        error={!errors.cpf.valid}
        helperText={errors.cpf.message}
        value={cpf}
        onChange={(event) => setCpf(event.target.value)}
        onBlur={(event) => {
          const validate = onValidateCpf(cpf, errors);
          setErrors(validate);
        }}
      />
      <FormControlLabel
        control={
          <Switch
            name="sales"
            color="primary"
            checked={sales}
            onChange={(event) => setSales(event.target.checked)}
          />
        }
        label="Promoções"
      />
      <FormControlLabel
        control={
          <Switch
            name="news"
            color="primary"
            checked={news}
            onChange={(event) => setNews(event.target.checked)}
          />
        }
        label="Novidades"
      />
      <br />
      <br />
      <Button type="submit" variant="contained" color="primary">
        Salvar
      </Button>
    </form>
  );
}

export default FormRegister;
