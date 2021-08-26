import React from "react";
import { Container, Typography, Card, CardContent } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";

import RegisterContainer from "./components/register/RegisterContainer";
import "@fontsource/roboto";
import { makeStyles } from "@material-ui/core/styles";
export const ThemeContext = React.createContext("dark");

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    height: 600,
    justifyContent: "center",
  },
}));

function register(fields) {
  console.log("Fields on register", fields);
}

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container}>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="primary"
          >
            Cadastre-se
          </Typography>
          <ThemeContext.Provider value={"dark"}>
            <RegisterContainer onRegister={register} />
          </ThemeContext.Provider>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
