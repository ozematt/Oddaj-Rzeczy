import { describe, it, expect, vi } from "vitest";
import { registerValidation } from "../../lib/validators";
import * as validators from "../../lib/validators";

vi.spyOn(validators, "validateEmail").mockImplementation((email) => {
  return /\S+@\S+\.\S+/.test(email) ? ["match"] : null;
});

describe("test registerValidation helper function", () => {
  it("should return true and not set errors for valid data", () => {
    const setErrorsMock = vi.fn();
    const isValid = registerValidation(
      "test@example.com",
      "securePassword",
      "securePassword",
      setErrorsMock
    );

    expect(isValid).toBe(true);
    expect(setErrorsMock).toHaveBeenCalledWith(""); // Brak błędów
  });
  it("should return set errors for invalid email", () => {
    const setErrorsMock = vi.fn();
    const isValid = registerValidation(
      "invalidEmail",
      "securePassword",
      "securePassword",
      setErrorsMock
    );

    expect(isValid).toBe(false);
    expect(setErrorsMock).toHaveBeenCalledWith("error-email ");
  });
});
