import { test, expect } from "@playwright/test";

test.describe("Contact submit flow", () => {
  test("should display error messages after submit contact form with empty fields ", async ({
    page,
  }) => {
    await page.goto("/");
    const contactButton = page
      .getByRole("navigation")
      .locator("li")
      .filter({ hasText: "Kontakt" });
    await contactButton.click();

    await page.getByRole("button", { name: "Wyślij" }).click();

    await expect(
      page.getByText("Podane imię jest nieprawidłowe!")
    ).toBeVisible();
    await expect(
      page.getByText("Podany email jest nieprawidłowy!")
    ).toBeVisible();
    await expect(
      page.getByText("Wiadomość musi mieć conajmniej 120 znaków!")
    ).toBeVisible();
  });
  test("should display error messages after submit contact form with invalid data ", async ({
    page,
  }) => {
    await page.goto("/");
    const contactButton = page
      .getByRole("navigation")
      .locator("li")
      .filter({ hasText: "Kontakt" });
    await contactButton.click();
    await page.getByPlaceholder("Krzysztof").fill("111");
    await page.getByPlaceholder("abc@xyz.pl").fill("invalid@Email");
    await page.getByPlaceholder("Lorem ipsum dolor sit amet,").fill("12345");

    await page.getByRole("button", { name: "Wyślij" }).click();

    await expect(
      page.getByText("Podane imię jest nieprawidłowe!")
    ).toBeVisible();
    await expect(
      page.getByText("Podany email jest nieprawidłowy!")
    ).toBeVisible();
    await expect(
      page.getByText("Wiadomość musi mieć conajmniej 120 znaków!")
    ).toBeVisible();
  });
});
