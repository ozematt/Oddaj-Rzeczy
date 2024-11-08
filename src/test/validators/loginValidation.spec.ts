import { describe, it, expect, vi } from "vitest";
import { loginValidation } from "../../lib/validators";
import * as validators from "../../lib/validators";

vi.spyOn(validators, "validateEmail").mockImplementation((email) => {
  return /\S+@\S+\.\S+/.test(email) ? ["match"] : null;
});

describe("test loginValidation helper function", () => {
  it("should return true and not set errors for valid data", () => {
    const setErrorsMock = vi.fn();
    const isValid = loginValidation(
      "test@example.com",
      "securePassword",
      setErrorsMock
    );
    expect(isValid).toBe(true);
    expect(setErrorsMock).toHaveBeenCalledWith("");
  });
  it("should return false and set error for invalid email", () => {
    const setErrorsMock = vi.fn();
    const isValid = loginValidation(
      "invalidEmail",
      "securePassword",
      setErrorsMock
    );
    expect(isValid).toBe(false);
    expect(setErrorsMock).toHaveBeenCalledWith("error-email");
  });
  it("should return false and set error for passwords shorter than 6 characters", () => {
    const setErrorsMock = vi.fn();
    const isValid = loginValidation("test@example.com", "123", setErrorsMock);
    expect(isValid).toBe(false);
    expect(setErrorsMock).toHaveBeenCalledWith("error-password");
  });
  it("should return false and set errors for invalid data", () => {
    const setErrorsMock = vi.fn();
    const isValid = loginValidation("invalidEmail", "123", setErrorsMock);
    expect(isValid).toBe(false);
    expect(setErrorsMock).toHaveBeenCalledWith("error-email error-password");
  });
});
