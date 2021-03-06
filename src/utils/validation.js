export const validateCpf = (cpf) => {
  if (cpf.length !== 11) {
    return false;
  }

  return true;
};

export const validateRequired = (value) => {
  if (!value || value.length === 0) {
    return false;
  }

  return true;
};

export const noValidate = () => true;

/**
 * verify error on field blur
 * @param {*} event
 * @param {*} validations
 * @param {*} errors
 * @return {Array} newErrors status dos erros coletados
 */
export const verifyError = (event, validations, errors) => {
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

  return newErrors;
};
