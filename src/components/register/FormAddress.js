import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Grid } from "@material-ui/core";
import useErrors from "../../hooks/useErrors";
import { LoadContext } from "../../contexts/Contexts";
import CustomLoader from "../../utils/CustomLoader";

function FormAdress({ onRegister, validations }) {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [errors, validateFields, canSubmit] = useErrors(validations);

  async function searchAddress(cep) {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const { logradouro, localidade, uf } = response.data;
    setAddress(logradouro);
    setCity(localidade);
    setState(uf);
  }

  return (
    <LoadContext.Consumer>
      {(loading) => {
        return (
          <form
            noValidate
            onSubmit={(event) => {
              event.preventDefault();

              if (
                canSubmit({ cep, address, number, complement, state, city })
              ) {
                onRegister({ cep, address, number, complement, state, city });
              }
            }}
          >
            {loading && <CustomLoader isLoading={loading} />}
            <TextField
              id="cep"
              label="CEP"
              variant="outlined"
              fullWidth
              margin="normal"
              required={validations["cep"].required}
              error={!errors.cep.valid}
              helperText={errors.cep.message}
              value={cep}
              onChange={(event) => setCep(event.target.value)}
              onBlur={(event) => {
                validateFields(event);
                searchAddress(event.target.value);
              }}
            />

            <TextField
              id="address"
              label="Endereço"
              variant="outlined"
              fullWidth
              margin="normal"
              required={validations["address"].required}
              error={!errors.address.valid}
              helperText={errors.address.message}
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              onBlur={validateFields}
            />

            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  id="number"
                  label="Número"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required={validations["number"].required}
                  error={!errors.number.valid}
                  helperText={errors.number.message}
                  value={number}
                  onChange={(event) => setNumber(event.target.value)}
                  onBlur={validateFields}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="complement"
                  label="Complemento"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required={validations["complement"].required}
                  error={!errors.complement.valid}
                  helperText={errors.complement.message}
                  value={complement}
                  onChange={(event) => setComplement(event.target.value)}
                  onBlur={validateFields}
                />
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  id="state"
                  label="Estado"
                  variant="outlined"
                  fullWidth
                  // margin="normal"
                  required={validations["state"].required}
                  error={!errors.state.valid}
                  helperText={errors.state.message}
                  value={state}
                  onChange={(event) => setState(event.target.value)}
                  onBlur={validateFields}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="city"
                  label="Cidade"
                  variant="outlined"
                  fullWidth
                  // margin="normal"
                  required={validations["city"].required}
                  error={!errors.city.valid}
                  helperText={errors.city.message}
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                  onBlur={validateFields}
                />
              </Grid>
            </Grid>
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

export default FormAdress;
