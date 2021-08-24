import React, { useState } from "react";
import { TextField, Button, FormControlLabel, Switch } from "@material-ui/core";
import useErrors from "../../hooks/useErrors";
import { LoadContext } from "../../contexts/Contexts";
import CustomLoader from "../../utils/CustomLoader";

function FormRegister({ onRegister, validations }) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [cpf, setCpf] = useState("");
  const [sales, setSales] = useState(true);
  const [news, setNews] = useState(true);
  const [errors, validateFields, canSubmit] = useErrors(validations);

  return (
    <LoadContext.Consumer>
      {(loading) => {
        return (
          <form
            onSubmit={(event) => {
              event.preventDefault();

              if (canSubmit({ name, lastname, cpf })) {
                onRegister({ name, lastname, cpf });
              }
            }}
          >
            {loading && <CustomLoader isLoading={loading} />}
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
              onBlur={validateFields}
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
              onBlur={validateFields}
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
              onBlur={validateFields}
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
              Próximo
            </Button>
          </form>
        );
      }}
    </LoadContext.Consumer>
  );
}

export default FormRegister;
