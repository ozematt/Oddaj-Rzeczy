const validateEmail = (email: string) => {
  return email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const registerValidation = (
  email: string,
  password: string,
  repeatPassword: string,
  setErrors: (errors: string) => void
): boolean => {
  let validationErrors = "";
  if (!validateEmail(email)) {
    validationErrors += "error-email "; // += added string to existing one
  }
  if (password.length < 6) {
    validationErrors += "error-password ";
  }
  if (password !== repeatPassword || repeatPassword.includes(" ")) {
    validationErrors += "error-repeated-password ";
  }
  if (validationErrors) {
    setErrors(validationErrors);
    return false;
  }
  setErrors("");
  return true;
};

export const loginValidation = (
  email: string,
  password: string,
  setErrors: (errors: string) => void
): boolean => {
  let validationErrors = "";
  if (!validateEmail(email)) {
    validationErrors += "error-email "; // += added string to existing one
  }
  if (password.length < 6) {
    validationErrors += "error-password ";
  }
  if (validationErrors) {
    setErrors(validationErrors);
    return false;
  }
  setErrors("");
  return true;
};
