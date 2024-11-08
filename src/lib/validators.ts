import { StepFourFormData } from "./types";

export const validateEmail = (email: string) => {
  return email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

//// register inputs validator
export const registerValidation = (
  email: string,
  password: string,
  repeatPassword: string,
  setErrors: (errors: string) => void
): boolean => {
  let validationErrors = "";

  //email
  if (!validateEmail(email)) {
    validationErrors += "error-email "; // += added string to existing one
  }
  //password
  if (password.length < 6) {
    validationErrors += "error-password ";
  }
  //repeated password
  if (password !== repeatPassword || repeatPassword.includes(" ")) {
    validationErrors += "error-repeated-password ";
  }
  if (validationErrors) {
    const trimErrorsValues = validationErrors.trim();
    setErrors(trimErrorsValues);
    return false;
  }
  setErrors("");
  return true;
};

////login inputs validator
export const loginValidation = (
  email: string,
  password: string,
  setErrors: (errors: string) => void
): boolean => {
  let validationErrors = "";

  //email
  if (!validateEmail(email)) {
    validationErrors += "error-email "; // += added string to existing one
  }
  //password
  if (password.length < 6) {
    validationErrors += "error-password ";
  }
  if (validationErrors) {
    const trimErrorsValues = validationErrors.trim();
    setErrors(trimErrorsValues);
    return false;
  }
  setErrors("");
  return true;
};

////address inputs validator
export const addressValidation = (
  dataToSend: StepFourFormData,
  setAddressErrors: (errors: string[]) => void
) => {
  let newAddressErrors = [];

  //street name
  if (dataToSend.address.streetName.length < 2) {
    newAddressErrors.push("Nazwa ulicy powinna mieć co najmniej 2 znaki.");
  }
  //city
  if (dataToSend.address.city.length < 2) {
    newAddressErrors.push("Nazwa miasta powinna mieć co najmniej 2 znaki.");
  }
  //postal code
  const postalCodeRegex = /^\d{2}-\d{3}$/; // XX-XXX
  if (!postalCodeRegex.test(dataToSend.address.postalCode)) {
    newAddressErrors.push("Proszę wprowadzić poprawny kod pocztowy (XX-XXX).");
  }
  //phone number
  const phoneNumberRegex = /^\d{9}$/; // nine numbers only
  if (!phoneNumberRegex.test(dataToSend.address.phoneNumber)) {
    newAddressErrors.push("Proszę wprowadzić poprawny numer telefonu.");
  }
  if (newAddressErrors.length > 0) {
    setAddressErrors(newAddressErrors);
    return;
  }
  setAddressErrors([]);
  return true;
};

////deadline inputs validator
export const deadlineValidation = (
  dataToSend: StepFourFormData,
  setDeadlineErrors: (errors: string[]) => void
) => {
  let newDeadlineErrors = [];
  //date
  const dateRegex = /^(\d{2})\.(\d{2})\.(\d{4})$/;
  if (!dateRegex.test(dataToSend.deadline.date)) {
    newDeadlineErrors.push("Data powinna być w formacie DD.MM.YYYY.");
  }
  //hour
  const timePattern = /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/;
  if (!timePattern.test(dataToSend.deadline.hour)) {
    newDeadlineErrors.push(
      "Nieprawidłowy format czasu (oczekiwany format: HH:MM)"
    );
  }
  if (newDeadlineErrors.length > 0) {
    setDeadlineErrors(newDeadlineErrors);
    return;
  }
  setDeadlineErrors([]);
  return true;
};
