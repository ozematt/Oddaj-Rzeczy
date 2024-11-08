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
  it("should set an error for invalid email", () => {
    const setErrorsMock = vi.fn();
    const isValid = registerValidation(
      "invalidEmail",
      "securePassword",
      "securePassword",
      setErrorsMock
    );

    expect(isValid).toBe(false);
    expect(setErrorsMock).toHaveBeenCalledWith("error-email");
  });
  it("should set an error for passwords shorter than 6 characters", () => {
    const setErrorsMock = vi.fn();
    const isValid = registerValidation(
      "test@example.com",
      "123",
      "123",
      setErrorsMock
    );

    expect(isValid).toBe(false);
    expect(setErrorsMock).toHaveBeenCalledWith("error-password");
  });
  it("should set an error for unmatched passwords", () => {
    const setErrorsMock = vi.fn();
    const isValid = registerValidation(
      "test@example.com",
      "securePassword",
      "differentPassword",
      setErrorsMock
    );

    expect(isValid).toBe(false);
    expect(setErrorsMock).toHaveBeenCalledWith("error-repeated-password");
  });
  it("should set an error for a password repeated with whitespace", () => {
    const setErrorsMock = vi.fn();
    const isValid = registerValidation(
      "test@example.com",
      "securePassword",
      "securePassword ",
      setErrorsMock
    );

    expect(isValid).toBe(false);
    expect(setErrorsMock).toHaveBeenCalledWith("error-repeated-password");
  });
  it("should set an errors for invalid data", () => {
    const setErrorsMock = vi.fn();
    const isValid = registerValidation(
      "invalidEmail",
      "123",
      "differentPassword ",
      setErrorsMock
    );

    expect(isValid).toBe(false);
    expect(setErrorsMock).toHaveBeenCalledWith(
      "error-email error-password error-repeated-password"
    );
  });
});
