import React, { useState } from "react";
import FormRegister from "./FormRegister";
import FormLogin from "./FormLogin";
import FormAddress from "./FormAddress";

function RegisterContainer({ onRegister, onValidateCpf, onValidateRequired }) {
  const [step, setStep] = useState(0);

  function next() {
    setStep(step + 1);
  }

  const forms = [
    <FormLogin onRegister={next} onValidateRequired={onValidateRequired} />,
    <FormRegister
      onRegister={next}
      onValidateCpf={onValidateCpf}
      onValidateRequired={onValidateRequired}
    />,
    <FormAddress onRegister={onRegister} />,
  ];

  return <>{forms[step]}</>;
}

export default RegisterContainer;
