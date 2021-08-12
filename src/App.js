import { Container, Typography } from "@material-ui/core";
import RegisterContainer from "./components/register/RegisterContainer";
import "@fontsource/roboto";
import { makeStyles } from "@material-ui/core/styles";
// import { validateCpf, validateFieldRequired } from "./utils/validation";
// usar objeto padrão com { valid e message }

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "20px",
  },
}));

function register(fields) {
  console.log("Fields on register", fields);
}

function validateCpf(cpf, errors) {
  let objectError = { ...errors };
  objectError["cpf"] = { valid: true, message: "" };

  if (cpf.length !== 11) {
    objectError["cpf"] = { valid: false, message: "O CPF deve ter 11 dígitos" };
  }

  return objectError;
}

function validateFieldRequired(field, value, errors) {
  let objectError = { ...errors };
  objectError[field] = { valid: true, message: "" };

  if (!value || value.length === 0) {
    objectError[field] = {
      valid: false,
      message: "Campo de preenchimento obrigatório",
    };
  }

  console.log("object error", objectError);

  return objectError;
}

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography component="h1" variant="h3" align="center" color="primary">
        Cadastre-se
      </Typography>
      <RegisterContainer
        onRegister={register}
        onValidateCpf={validateCpf}
        onValidateRequired={validateFieldRequired}
      />
    </Container>
  );
}

export default App;
