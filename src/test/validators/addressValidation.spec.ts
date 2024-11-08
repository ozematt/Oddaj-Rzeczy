import { describe, it, expect, vi } from "vitest";
import { addressValidation } from "../../lib/validators";

// const dataToSend = {
//     address: {
//       streetName: "",
//       city: "",
//       postalCode: "",
//       phoneNumber: "",
//     },
//     deadline: {
//       date: "",
//       hour: "",
//       comments: "",
//     },
//   };

describe("test addressValidation helper function", () => {
  it("should return true and not set errors for valid address data", () => {
    const setAddressErrors = vi.fn();
    const dataToSend = {
      address: {
        streetName: "Sunny",
        city: "Warsaw",
        postalCode: "20-210",
        phoneNumber: "890765243",
      },
      deadline: {
        date: "",
        hour: "",
        comments: "",
      },
    };
    const isValid = addressValidation(dataToSend, setAddressErrors);

    expect(isValid).toBe(true);
    expect(setAddressErrors).toHaveBeenCalledWith([]);
  });
  it("should return false and set error for street name shorter than 2 characters", () => {
    const setAddressErrors = vi.fn();
    const dataToSend = {
      address: {
        streetName: "s",
        city: "Warsaw",
        postalCode: "20-210",
        phoneNumber: "890765243",
      },
      deadline: {
        date: "",
        hour: "",
        comments: "",
      },
    };
    const isValid = addressValidation(dataToSend, setAddressErrors);

    expect(isValid).toBe(false);
    expect(setAddressErrors).toHaveBeenCalledWith([
      "Nazwa ulicy powinna mieć co najmniej 2 znaki.",
    ]);
  });
  it("should return false and set error for city name shorter than 2 characters", () => {
    const setAddressErrors = vi.fn();
    const dataToSend = {
      address: {
        streetName: "Sunny",
        city: "W",
        postalCode: "20-210",
        phoneNumber: "890765243",
      },
      deadline: {
        date: "",
        hour: "",
        comments: "",
      },
    };
    const isValid = addressValidation(dataToSend, setAddressErrors);

    expect(isValid).toBe(false);
    expect(setAddressErrors).toHaveBeenCalledWith([
      "Nazwa miasta powinna mieć co najmniej 2 znaki.",
    ]);
  });
  it("should return false and set error for invalid postal code", () => {
    const setAddressErrors = vi.fn();
    const dataToSend = {
      address: {
        streetName: "Sunny",
        city: "Warsaw",
        postalCode: "20210",
        phoneNumber: "890765243",
      },
      deadline: {
        date: "",
        hour: "",
        comments: "",
      },
    };
    const isValid = addressValidation(dataToSend, setAddressErrors);

    expect(isValid).toBe(false);
    expect(setAddressErrors).toHaveBeenCalledWith([
      "Proszę wprowadzić poprawny kod pocztowy (XX-XXX).",
    ]);
  });
  it("should return false and set error for invalid phone number", () => {
    const setAddressErrors = vi.fn();
    const dataToSend = {
      address: {
        streetName: "Sunny",
        city: "Warsaw",
        postalCode: "20-210",
        phoneNumber: "123",
      },
      deadline: {
        date: "",
        hour: "",
        comments: "",
      },
    };
    const isValid = addressValidation(dataToSend, setAddressErrors);

    expect(isValid).toBe(false);
    expect(setAddressErrors).toHaveBeenCalledWith([
      "Proszę wprowadzić poprawny numer telefonu.",
    ]);
  });
  it("should return false and set errors for invalid address data", () => {
    const setAddressErrors = vi.fn();
    const dataToSend = {
      address: {
        streetName: "S",
        city: "W",
        postalCode: "20210",
        phoneNumber: "123",
      },
      deadline: {
        date: "",
        hour: "",
        comments: "",
      },
    };
    const isValid = addressValidation(dataToSend, setAddressErrors);

    expect(isValid).toBe(false);
    expect(setAddressErrors).toHaveBeenCalledWith([
      "Nazwa ulicy powinna mieć co najmniej 2 znaki.",
      "Nazwa miasta powinna mieć co najmniej 2 znaki.",
      "Proszę wprowadzić poprawny kod pocztowy (XX-XXX).",
      "Proszę wprowadzić poprawny numer telefonu.",
    ]);
  });
});
