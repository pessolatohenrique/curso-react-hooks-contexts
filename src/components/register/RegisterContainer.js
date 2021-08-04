import React, { useState } from "react";
import FormRegister from "./FormRegister";
import FormLogin from "./FormLogin";
import FormAddress from "./FormAddress";

function RegisterContainer({ onRegister, onValidateCpf, onValidateRequired }) {
  return (
    <>
      <FormLogin />
      <FormRegister
        onRegister={onRegister}
        onValidateCpf={onValidateCpf}
        onValidateRequired={onValidateRequired}
      />
      <FormAddress />
    </>
  );
}

export default RegisterContainer;
