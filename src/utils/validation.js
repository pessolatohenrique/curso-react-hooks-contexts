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
