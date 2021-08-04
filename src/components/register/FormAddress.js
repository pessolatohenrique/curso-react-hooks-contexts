import React, { useState } from "react";
import { TextField, Button, Grid } from "@material-ui/core";

function FormAdress() {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  return (
    <form>
      <TextField
        id="cep"
        label="CEP"
        variant="outlined"
        fullWidth
        margin="normal"
        value={cep}
        onChange={(event) => setCep(event.target.value)}
      />

      <TextField
        id="address"
        label="Endereço"
        variant="outlined"
        fullWidth
        margin="normal"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            id="number"
            label="Número"
            variant="outlined"
            fullWidth
            margin="normal"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            id="complement"
            label="Complemento"
            variant="outlined"
            fullWidth
            margin="normal"
            value={complement}
            onChange={(event) => setComplement(event.target.value)}
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
            value={state}
            onChange={(event) => setState(event.target.value)}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            id="city"
            label="Cidade"
            variant="outlined"
            fullWidth
            // margin="normal"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </Grid>
      </Grid>
      <br />
      <Button type="submit" variant="contained" color="primary">
        Salvar
      </Button>
    </form>
  );
}

export default FormAdress;
