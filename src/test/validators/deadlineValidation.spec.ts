import { describe, it, expect, vi } from "vitest";
import { deadlineValidation } from "../../lib/validators";

describe("test deadlineValidation helper function", () => {
  it("should return true and not set errors for valid deadline data", () => {
    const setAddressErrors = vi.fn();
    const dataToSend = {
      address: {
        streetName: "",
        city: "",
        postalCode: "",
        phoneNumber: "",
      },
      deadline: {
        date: "01.01.2024",
        hour: "20:00",
        comments: "",
      },
    };
    const isValid = deadlineValidation(dataToSend, setAddressErrors);

    expect(isValid).toBe(true);
    expect(setAddressErrors).toHaveBeenCalledWith([]);
  });
  it("should return false and set error for invalid date", () => {
    const setAddressErrors = vi.fn();
    const dataToSend = {
      address: {
        streetName: "",
        city: "",
        postalCode: "",
        phoneNumber: "",
      },
      deadline: {
        date: "01/01/2024",
        hour: "20:00",
        comments: "",
      },
    };
    const isValid = deadlineValidation(dataToSend, setAddressErrors);

    expect(isValid).toBe(false);
    expect(setAddressErrors).toHaveBeenCalledWith([
      "Data powinna być w formacie DD.MM.YYYY.",
    ]);
  });
  it("should return false and set error for invalid time format", () => {
    const setAddressErrors = vi.fn();
    const dataToSend = {
      address: {
        streetName: "",
        city: "",
        postalCode: "",
        phoneNumber: "",
      },
      deadline: {
        date: "01.01.2024",
        hour: "20.00",
        comments: "",
      },
    };
    const isValid = deadlineValidation(dataToSend, setAddressErrors);

    expect(isValid).toBe(false);
    expect(setAddressErrors).toHaveBeenCalledWith([
      "Nieprawidłowy format czasu (oczekiwany format: HH:MM)",
    ]);
  });
  it("should return false and set errors for invalid deadline data", () => {
    const setAddressErrors = vi.fn();
    const dataToSend = {
      address: {
        streetName: "",
        city: "",
        postalCode: "",
        phoneNumber: "",
      },
      deadline: {
        date: "01/01/2024",
        hour: "20.00",
        comments: "",
      },
    };
    const isValid = deadlineValidation(dataToSend, setAddressErrors);

    expect(isValid).toBe(false);
    expect(setAddressErrors).toHaveBeenCalledWith([
      "Data powinna być w formacie DD.MM.YYYY.",
      "Nieprawidłowy format czasu (oczekiwany format: HH:MM)",
    ]);
  });
});
