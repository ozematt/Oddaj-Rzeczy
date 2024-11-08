import { describe, it, expect } from "vitest";
import validateEmail from "../../lib/validators";

describe("test validateEmail helper function", () => {
  it("should return a match for a valid email address", () => {
    expect(validateEmail("test@example.com")).not.toBeNull();
    expect(validateEmail("user.name@sub.domain.com")).not.toBeNull();
    expect(validateEmail("user123@domain.co.uk")).not.toBeNull();
  });
  it("should return null for invalid email address", () => {
    expect(validateEmail("test@.com")).toBeNull();
    expect(validateEmail("user@domain")).toBeNull();
    expect(validateEmail("user@@domain.com")).toBeNull();
    expect(validateEmail("user@domain..com")).toBeNull();
    expect(validateEmail("plainaddress")).toBeNull();
    expect(validateEmail("user@domain,com")).toBeNull();
  });
  it("should ignore the case of the email address", () => {
    expect(validateEmail("Test@Example.Com")).not.toBeNull();
  });
});
