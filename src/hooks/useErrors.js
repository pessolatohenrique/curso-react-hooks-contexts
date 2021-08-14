import { useState } from "react";

function useErrors(validations) {
  const initializedErrors = initializeErrors(validations);
  const [errors, setErrors] = useState(initializedErrors);

  function initializeErrors(validations) {
    const newValidations = Object.assign({}, validations);
    const defaultObject = { valid: true, message: "" };
    for (const key in validations) {
      newValidations[key] = defaultObject;
    }

    return newValidations;
  }

  function validateFields(event) {
    const validation = validations[event.target.id];

    if (!validation) return errors;

    const validationFunction = validation.functionRef;
    const validationResult = validationFunction(event.target.value);
    const validationMessage = validation.messageRef;
    const newErrors = { ...errors };

    newErrors[event.target.id] = {
      valid: validationResult,
      message: validationResult ? "" : validationMessage,
    };

    setErrors(newErrors);
  }

  function canSubmit() {
    for (const key in errors) {
      console.log("error", errors[key]);
      return true;
    }
    console.log("errors", errors);
    const everyValid = errors.every((item) => item.valid);
    return everyValid;
  }

  return [errors, validateFields, canSubmit];
}

export default useErrors;
