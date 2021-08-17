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

    const validationResult = validation.functionRef(event.target.value);
    const validationMessage = validation.messageRef;
    const newErrors = { ...errors };

    newErrors[event.target.id] = {
      valid: validationResult,
      message: validationResult ? "" : validationMessage,
    };

    setErrors(newErrors);
  }

  function canSubmit(fields) {
    const overviewErrors = initializeErrors(validations);

    for (const key in validations) {
      const valueField = fields[key];
      const validationResult = validations[key].functionRef(valueField);
      const validationMessage = validations[key].messageRef;

      overviewErrors[key] = {
        valid: validationResult,
        message: validationResult ? "" : validationMessage,
      };
      setErrors(overviewErrors);
    }

    for (const key in overviewErrors) {
      if (!overviewErrors[key].valid) return false;
    }

    return true;
  }

  return [errors, validateFields, canSubmit];
}

export default useErrors;
